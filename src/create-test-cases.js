const createTestCases = (testData, fnToTest) => {
	return testData.forEach(testCase => {
		const { inputs, expectedOutput, matchers = ["toBe"] } = testCase,
			currentDescribeLabel = `Input: ${JSON.stringify(...inputs)}`;

		let matcherToUse;

		describe(currentDescribeLabel, () => {
			it(`should return ${expectedOutput}`, () => {
				const output = fnToTest(...inputs),
					initialExpectator = expect(output),
					expectator = matchers.reduce((expectator, nextMatcher) => {
						const nextExpectator = expectator[nextMatcher],
							isExpectatorAMatcher = typeof nextExpectator === "function";

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
