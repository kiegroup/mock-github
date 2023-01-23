import express from "express";
import { Server } from "http";
import fs from "fs-extra";
import path from "path";
import { totalist } from "totalist/sync";

export class ArchiveServer {
  private store: string;
  private port: string;
  private server: express.Express;
  private app?: Server;

  constructor(store: string, port: string) {
    this.port = port;
    this.store = store;

    this.server = express();
    this.server.use(express.json());
    this.server.use(
      express.raw({
        type: "application/octet-stream",
        limit: "150mb",
      })
    );
    this.initDownload();
    this.initUpload();
  }

  private initUpload() {
    this.server.post(
      "/_apis/pipelines/workflows/:runId/artifacts",
      (req, res) => {
        const { runId } = req.params;
        const baseURL = `${req.protocol}://${req.get("host")}${req.baseUrl}`;

        res.json({ fileContainerResourceUrl: `${baseURL}/upload/${runId}` });
      }
    );

    this.server.patch(
      "/_apis/pipelines/workflows/:runId/artifacts",
      (_req, res) => {
        res.status(200).json({ message: "success" });
      }
    );

    this.server.put("/upload/:runId", (req, res) => {
      let { itemPath } = req.query;
      const { runId } = req.params;

      if (req.get("Content-Encoding")) {
        itemPath += ".gz__";
      }

      const filename = path.join(
        this.store,
        runId,
        path.normalize(itemPath as string)
      );
      fs.ensureFileSync(filename);

      const contentRange = req.get("Content-Range");
      const mode =
        contentRange !== "" && !contentRange?.startsWith("bytes 0-")
          ? "a"
          : "w";
      const fd = fs.openSync(filename, mode);
      fs.writeSync(fd, req.body);
      res.status(200).json({ message: "success" });
    });
  }

  private initDownload() {
    this.server.get(
      "/_apis/pipelines/workflows/:runId/artifacts",
      (req, res) => {
        const { runId } = req.params;
        const artifacts: Record<string, string>[] = [];
        const baseURL = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
        totalist(path.join(this.store, runId), (name, _abs, _stats) => {
          name = name.replace("\\", "/");
          const fileDetails = {
            name: name.split("/")[0],
            fileContainerResourceUrl: `${baseURL}/download/${runId}`,
          };
          artifacts.push(fileDetails);
        });
        res.status(200).json({ count: artifacts.length, value: artifacts });
      }
    );

    this.server.get("/download/:container", (req, res) => {
      const { container } = req.params;
      const baseURL = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
      const files: Record<string, string>[] = [];
      totalist(path.join(this.store, container), (name, _abs, _stats) => {
        files.push({
          path: path.normalize(name),
          itemType: "file",
          contentLocation: `${baseURL}/download/${container}/${name.replace(
            "\\",
            "/"
          )}`,
        });
      });
      res.status(200).json({ value: files });
    });

    this.server.get("/download/:container/:path(*)", (req, res) => {
      const fileLocation = path.join(
        this.store,
        req.params.container,
        req.params.path
      );
      fs.createReadStream(fileLocation, { encoding: "utf-8" }).pipe(res);
    });
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      const app = this.server.listen(this.port, () => {
        this.app = app;
        resolve();
      });
      app.on("error", err => {
        reject(err);
      });
    });
  }

  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.app) {
        this.app.close(err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        reject(new Error("Server has not been started"));
      }
    });
  }
}
