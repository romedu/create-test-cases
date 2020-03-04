const TestCase = require("../src/TestCase");

describe("TestCase function", () => {
	const newTestCaseInstaceData = {
		inputs: [1],
		expectedOutput: 1,
		matchers: ["toBe"],
		testName: "Test Name"
	};

	describe("When called with the new keyword", () => {
		const { inputs, expectedOutput, matchers, testName } = newTestCaseInstaceData;
		const commonTestCaseInstance = new TestCase(inputs, expectedOutput, matchers, testName);
		const defaultParamsTestCasesInstance = new TestCase(inputs, expectedOutput);

		commonTestCases(commonTestCaseInstance, newTestCaseInstaceData);
		defaultParamsTestCases(defaultParamsTestCasesInstance);
	});

	describe("When called without the new keyword", () => {
		const { inputs, expectedOutput, matchers, testName } = newTestCaseInstaceData;
		const commonTestCaseInstance = TestCase(inputs, expectedOutput, matchers, testName);
		const defaultParamsTestCasesInstance = TestCase(inputs, expectedOutput);

		commonTestCases(commonTestCaseInstance, newTestCaseInstaceData);
		defaultParamsTestCases(defaultParamsTestCasesInstance);
	});
});

function commonTestCases(testCaseInstance, instanceData) {
	it("should create an instance of TestCase", () => {
		expect(testCaseInstance).toBeInstanceOf(TestCase);
	});

	it("should set the instance's inputs property equal to the first parameter passed", () => {
		expect(testCaseInstance.inputs).toEqual(instanceData.inputs);
	});

	it("should set the instance's expectedOutput property equal to the second parameter passed", () => {
		expect(testCaseInstance.expectedOutput).toEqual(instanceData.expectedOutput);
	});

	it("should set the instance's matchers property equal to the third parameter passed", () => {
		expect(testCaseInstance.matchers).toEqual(instanceData.matchers);
	});

	it("should set the instance's testName property equal to the fourth parameter passed", () => {
		expect(testCaseInstance.testName).toEqual(instanceData.testName);
	});
}

function defaultParamsTestCases(testCaseInstance) {
	it("should set the instance's testName property to the default value if not passed", () => {
		expect(testCaseInstance.testName).toBeTruthy();
	});

	it("should set the instance's matchers property to the default value if not passed", () => {
		expect(testCaseInstance.matchers).toBeTruthy();
	});
}
