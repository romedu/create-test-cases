const createTestCases = require("../src/create-test-cases");

describe("Create test cases function", () => {
	const testData = [
			{
				inputs: [true],
				expectedOutput: true,
				matchers: ["toBe"]
			},
			{
				inputs: [false],
				expectedOutput: true,
				matchers: ["not", "toBe"]
			},
			{
				inputs: ["Hello"],
				expectedOutput: "Hello"
			},
			{
				inputs: [44],
				expectedOutput: 44
			}
		],
		testFunction = input => input;

	createTestCases(testData, testFunction);
});
