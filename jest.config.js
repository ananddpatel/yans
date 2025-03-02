/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  maxWorkers: 1,
  detectOpenHandles: true,
  openHandlesTimeout: 10,
  verbose: true,
  forceExit: true,
};
