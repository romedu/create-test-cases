const createTestCases = (testData, fnToTest) => {
	return testData.forEach(testCase => {
		const { inputs, expectedOutput, matchers, testName } = testCase;
		const currentDescribeLabel = `Input: ${JSON.stringify(...inputs)}`;

		let matcherToUse;

		describe(currentDescribeLabel, () => {
			it(testName, () => {
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
