import { loadYamlFile, saveYamlFile } from "../../../src/shared/util/fs-util"
import { readFileSync, writeFileSync } from "fs"
import YAML from 'yaml';

jest.mock('fs');

const readFileSyncMock = readFileSync as jest.Mock;
const writeFileSyncMock = writeFileSync as jest.Mock;

describe("loadYamlFile", () => {
    test("ok no encoding", () => {
        // Arrange
        const path = "pathx";
        const fileContentObject = { key: "value" };
        readFileSyncMock.mockReturnValueOnce(YAML.stringify(fileContentObject))
        // Act
        const result = loadYamlFile(path)

        // Assert
        expect(result).toStrictEqual(fileContentObject)
        expect(readFileSyncMock).toHaveBeenCalledWith(path, "utf8")

    })

    test("ok with encoding", () => {
        // Arrange
        const path = "pathx";
        const fileContentObject = { key: "value" };
        readFileSyncMock.mockReturnValueOnce(YAML.stringify(fileContentObject))
        // Act
        const result = loadYamlFile(path, "ascii")

        // Assert
        expect(result).toStrictEqual(fileContentObject)
        expect(readFileSyncMock).toHaveBeenCalledWith(path, "ascii")
    })

    test("readFileSync error thrown", () => {
        // Arrange
        const path = "pathx";
        readFileSyncMock.mockImplementationOnce(() => { throw new Error("") })

        // Act
        expect(() => loadYamlFile(path)).toThrowError();
    })

    test("YAML.parse error thrown", () => {
        // Arrange
        const path = "pathx";
        readFileSyncMock.mockReturnValueOnce({})

        jest.spyOn(YAML, "parse").mockImplementation(() => { throw new Error("") })

        // Act
        expect(() => loadYamlFile(path)).toThrowError();
    })

})

describe("writeFileSync", () => {
    test("ok no encoding", () => {
        // Arrange
        const path = "pathx";
        const fileContentObject = { key: "value" };
        // Act
        saveYamlFile(path, fileContentObject)

        // Assert
        expect(writeFileSyncMock).toHaveBeenCalledWith(path, YAML.stringify(fileContentObject), "utf8")

    })

    test("ok with encoding", () => {
        // Arrange
        const path = "pathx";
        const fileContentObject = { key: "value" };
        // Act
        saveYamlFile(path, fileContentObject, "ascii")

        // Assert
        expect(writeFileSyncMock).toHaveBeenCalledWith(path, YAML.stringify(fileContentObject), "ascii")
    })

    test("error thrown", () => {
        // Arrange
        const path = "pathx";
        writeFileSyncMock.mockImplementationOnce(() => { throw new Error("") })

        // Act
        expect(() => saveYamlFile(path, {})).toThrowError();
    })

})