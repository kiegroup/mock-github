import express from "express";
import { Server } from "http";
import fs from "fs-extra";
import path from "path";
import { totalist } from "totalist";

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
      (req, res) => {
        res.status(200).json({ message: "success" });
      }
    );

    this.server.put("/upload/:runId", (req, res, next) => {
      const { itemPath } = req.query;
      const { runId } = req.params;
      req.setEncoding("base64");
      const filename = path.join(
        this.store,
        runId,
        path.normalize(itemPath as string)
      );
      fs.ensureFileSync(filename);
      fs.writeFile(filename, req.body, { encoding: "utf-8" }, (err) => {
        if (err) {
          console.error(err);
        }
        res.status(200).json({ message: "success" });
      });
    });
  }

  private initDownload() {
    this.server.get(
      "/_apis/pipelines/workflows/:runId/artifacts",
      (req, res) => {
        const { runId } = req.params;
        const artifacts: Record<string, string>[] = [];
        const baseURL = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
        totalist(`./${runId}`, (name, abs, stats) => {
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
      totalist(path.join(this.store, container as string), (name, abs, stats) => {
        console.log(name);
        console.log(abs);
        files.push({
          path: path.normalize(name),
          itemType: "file",
          contentLocation: `${baseURL}/download/${container}/${name.replace(
            "\\",
            "/"
          )}`,
        });
      });
      res.status(200).json({ value: [...files] });
    });

    this.server.get("/download/:container/:path(*)", (req, res) => {
      const fileLocation = path.join(this.store, req.params.container, req.params.path)
      fs.createReadStream(fileLocation, { encoding: "utf-8" }).pipe(res);
    });
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.app = this.server.listen(this.port, () => {
        resolve();
      });
      this.app.on("error", (err) => {
        reject(err);
      });
    });
  }

  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.app) {
        this.app.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }
}
