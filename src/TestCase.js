"use strict";

function TestCase(inputs, expectedOutput, matchers, testName) {
	const newTestCase = this || {};

	newTestCase.inputs = inputs || [];
	newTestCase.expectedOutput = expectedOutput || null;
	newTestCase.matchers = matchers || ["toBe"];
	newTestCase.testName = testName || `should return ${newTestCase.expectedOutput}`;

	return newTestCase;
}

module.exports = TestCase;
