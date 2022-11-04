import { CreateRepositoryFile } from "../repository/files/repository-file-system.types";
import * as fs from "fs";
import * as path from "path";
import { GITIGNORE } from "../repository/repository.constants";

export class FileUtils {

    public static listFiles(folder: string, exclude?: string): CreateRepositoryFile[] {
        const excludeRegExp = exclude ? new RegExp(exclude, 'g') : undefined;
        return fs.readdirSync(folder)
            .filter(e => excludeRegExp ? !e.match(excludeRegExp) : e)
            .map(e => ({ src: path.join(folder, e), dest: e }));
    }

    public static listMockGithubFiles(folder: string, repoFolderName?: string): CreateRepositoryFile[] {
        return FileUtils.listFiles(folder, `${repoFolderName ? `^${repoFolderName}$|` : ''}^node_modules$|^\\${GITIGNORE}$|^\.git$`);
    }
}