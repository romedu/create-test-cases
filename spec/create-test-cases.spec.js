const createTestCases = require("../src/create-test-cases");
const TestCase = require("../src/TestCase");

describe("Create test cases function", () => {
  const testData = [
    new TestCase([true], true, ["toBe"]),
    new TestCase([false], true, ["not", "toBe"]),
    new TestCase(["Hello"], "Hello"),
    new TestCase([44], 44)
  ];
  const testFunction = input => input;

  createTestCases(testData, testFunction);
});
