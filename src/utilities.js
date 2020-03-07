exports.createInputsString = inputs => {
  try {
    inputs.map(this.getInputStringValue).join(", ");
  } catch (e) {
    const err =
      "TestCase inputs argument shouldn't be undefined. Refer to https://github.com/romedu/create-test-cases";
    throw err;
  }
};

exports.getInputStringValue = input => {
  const isInputAFunction = typeof input === "function";
  const inputStringValue = isInputAFunction
    ? "FUNCTION"
    : JSON.stringify(input);
  return inputStringValue;
};

module.exports = exports;
