module.exports = {
  // automatically clear mock calls and instances between every test
  clearMocks: true,
  // files to be included in our coverage report
  collectCoverageFrom: ["src/components/**/*.js", "src/lib/**/*.js"],
  // ignore files from coverage
  coveragePathIgnorePatterns: ["/node_modules/"],
  // a list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["./jest.setup.js"],
  // the file types we want to test
  testMatch: ["**/*.spec.+(js)"],
  // environment that our tests will run in - https://github.com/jsdom/jsdom
  testEnvironment: "jsdom",
  // resets mock state before every test
  resetMocks: false,
};
