export const REMOTE = "remote";
export const ORIGIN = "origin";
export const UPSTREAM = "upstream";
export const GITIGNORE = ".gitignore";
export const DEFAULT_BRANCH = "main";
export const DUMMY_FILE_NAME = "dummy-file-";
export const DUMMY_FILE_DATA = "dummy data"
export const DEFAULT_COMMIT_MSG = (num: number) => `adding files to mimic history at index ${num}`;
export const DEFAULT_MERGE_COMMIT_MSG = (base: string, head: string) => `Merging ${head} to ${base}`;
export const DEFAULT_INIT_COMMIT_MSG = "initialization";
