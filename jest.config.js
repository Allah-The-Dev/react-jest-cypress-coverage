// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // collect coverage
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "jest-coverage",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  // Run tests from one or more projects
  projects: ["<rootDir>/src"],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  // //   "**/__tests__/**/*.js?(x)",
  // //   "**/?(*.)+(spec|test).js?(x)"
  //   "**/?(*.)+(test).js?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "cypress"
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
