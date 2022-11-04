import * as fs from "fs";
import YAML from 'yaml';

/**
 * loads yaml file content from the filesystem
 * 
 * @param filePath the path to save the file to
 * @param encoding the optional encoding value will be forwarded to fs operation
 * @return the file content yaml parsed into an object
 */
export const loadYamlFile = (filePath: string, encoding: BufferEncoding = 'utf8'): unknown => {
    let fileContent: string;
    try {
        fileContent = fs.readFileSync(filePath, encoding);
    } catch (e) {
        throw new Error(`Error loading file from ${filePath}`)
    }
    try {
        return YAML.parse(fileContent);
    } catch (e) {
        throw new Error(`Error parsing yaml from file ${filePath}`)
    }
}

/**
 * saves object content into the filesystem
 * 
 * @param filePath the path to save the file to
 * @param data the object to save
 * @param encoding the optional encoding value will be forwarded to fs operation
 */
export const saveYamlFile = (filePath: string, data: any, encoding: BufferEncoding = 'utf8') => {
    try {
        fs.writeFileSync(filePath, YAML.stringify(data), encoding);
    } catch (e) {
        throw new Error(`Error saving file to ${filePath}`)
    }
}