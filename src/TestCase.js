"use strict";

function TestCase(inputs, expectedOutput, matchers, testName) {
	const wasCalledWithNewKeyword = !!this;

	if (!wasCalledWithNewKeyword) return new TestCase(...arguments);

	this.inputs = inputs;
	this.expectedOutput = expectedOutput;
	this.matchers = matchers || ["toBe"];
	this.testName = testName || `should return ${this.expectedOutput}`;

	return this;
}

module.exports = TestCase;
