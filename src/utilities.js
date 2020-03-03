exports.createInputsString = inputs => inputs.map(this.getInputStringValue).join(", ");

exports.getInputStringValue = input => {
	const isInputAFunction = typeof input === "function";
	const inputStringValue = isInputAFunction ? "FUNCTION" : JSON.stringify(input);
	return inputStringValue;
};

module.exports = exports;
