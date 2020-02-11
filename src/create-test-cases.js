const createTestCases = (testData, fnToTest) => {
	return testData.forEach(testCase => {
		const { inputs, expectedOutput, matchers = ["toBe"] } = testCase,
			currentDescribeLabel = `Input: ${JSON.stringify(...inputs)}`;

		describe(currentDescribeLabel, () => {
			it(`should return ${expectedOutput}`, () => {
				const output = fnToTest(...inputs),
					expectationObj = expect(output),
					expectationMatcher = matchers.reduce(
						(expectation, nextMatcher) => {
							return expectation[nextMatcher];
						},
						expectationObj
					);

				expectationMatcher.call(expectationObj, expectedOutput);
			});
		});
	});
};

module.exports = createTestCases;
