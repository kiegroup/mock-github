import type { Config } from "@jest/types";
// Sync object
const jestConfig: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@octokit|universal-user-agent|before-after-hook)/)",
  ],
  moduleNameMapper: {
    "^@mg/(.*)$": "<rootDir>/src/$1",
    "^@octokit/rest$": "<rootDir>/test/__mocks__/@octokit/rest.ts",
  },
  clearMocks: true,
  resetMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/build/"],
  collectCoverageFrom: [
    "src/**",
    "!**/*.types.ts",
    "!**/*.constants.ts",
    "!src/action-compiler/mocker/**",
    "!src/index.ts",
    "!src/moctokit/generated/**"
  ],
  testLocationInResults: true,
  testResultsProcessor: "jest-sonar-reporter",
  testTimeout: 50000,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  }
};
export default jestConfig;