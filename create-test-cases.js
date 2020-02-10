const createTestCases = (testData, fnToTest, matcher = "toBe") => {
	return testData.forEach(testCase => {
		const { inputs, expectedOutput } = testCase,
			currentDescribeLabel = `Input: ${JSON.stringify(...inputs)}`;

		describe(currentDescribeLabel, () => {
			it(`should return ${expectedOutput}`, () => {
				const output = fnToTest(...inputs);
				expect(output)[matcher](expectedOutput);
			});
		});
	});
};

module.exports = createTestCases;
