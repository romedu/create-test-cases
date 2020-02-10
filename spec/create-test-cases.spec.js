const createTestCases = require("../create-test-cases");

describe("Create test cases function", () => {
	const testData = [
			{
				inputs: [true],
				expectedOutput: true
			},
			{
				inputs: [false],
				expectedOutput: false
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
