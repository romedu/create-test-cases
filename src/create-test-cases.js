const { createInputsString } = require("./utilities");

const createTestCases = (testData, fnToTest) => {
	return testData.forEach(testCase => {
		const { inputs, expectedOutput, matchers, testName } = testCase;
		const inputsString = createInputsString(inputs);
		const currentDescribeLabel = `Input: (${inputsString})`;

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
