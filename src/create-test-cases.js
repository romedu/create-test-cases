const createTestCases = (testData, fnToTest) => {
	return testData.forEach(testCase => {
		const { inputs, expectedOutput, testName, matchers = ["toBe"] } = testCase;
		const currentDescribeLabel = `Input: ${JSON.stringify(...inputs)}`;
		const currentTestName = testName || `should return ${expectedOutput}`;

		let matcherToUse;

		describe(currentDescribeLabel, () => {
			it(currentTestName, () => {
				const output = fnToTest(...inputs);
				const initialExpectator = expect(output);
				const expectator = matchers.reduce((expectator, nextMatcher) => {
					const nextExpectator = expectator[nextMatcher];
					const isExpectatorAMatcher = typeof nextExpectator === "function";

					if (!isExpectatorAMatcher) return nextExpectator;
					else {
						matcherToUse = nextExpectator;
						return expectator;
					}
				}, initialExpectator);

				matcherToUse.call(expectator, expectedOutput);
			});
		});
	});
};

module.exports = createTestCases;
