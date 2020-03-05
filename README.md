# create-test-cases

[![travis-build][travis-shield-image]][travis-url] [![npm-version][npm-shield-image]][npm-url] [![npm-license][license-shield-image]](LICENSE)

Node.js function that creates test cases based on the specified inputs and outputs.
Decrease the time taken to write simple test cases using this framework agnostic function.

**Note** This tool expects that the testing framework in use follows the common conventions.

## Installation

```sh
$ npm install create-test-cases
```

## API

```js
const { createTestCases, TestCase } = require("create-test-cases");
```

### createTestCases(testData, fnToTest)

Will create a describe blocks specifying all of the parameters passed to the function, and an it block
for each of the test cases displaying the expected return value.
**Note:** It is advised to call the function inside of a describe block.

##### testData

The testData parameter is an array of TestCase instance objects.

##### fnToTest

Function in which the test cases will be based.

### TestCase(inputs, expectedOutput, matchers, testName)

Will create an instance of the TestCase "class".
**Note:** Calling the function with the `new` keyword is not required.

##### inputs

Array of parameters to be passed to the currently testing function

##### expectedOutput

Expected return value from the currently testing function

##### matchers

Array of matchers to be used in the test case. **Default:** `["toBe"]`.
**Note:** Check your framework's documentation to see a list of the valid matchers.

##### testName

String to be used as the name of the test. **Default:** `"should return " + expectedOutput`.

## Examples

This example demonstrates how to create test cases using the createTestCases function.

```js
const { createTestCases, TestCase } = require("create-test-cases");
const testData = [
	new TestCase([true], true, ["toBe"]),
	new TestCase([false], true, ["not", "toBe"]),
	new TestCase(["Hello"], "Hello")
];

const testFunction = input => input;

createTestCases(testData, testFunction);
```

## License

[MIT](LICENSE)

[travis-shield-image]: https://travis-ci.com/romedu/create-test-cases.svg?token=1L9gJ24KwcP86SaRyfTy&branch=master
[travis-url]: https://travis-ci.com/romedu/create-test-cases
[npm-shield-image]: https://img.shields.io/npm/v/create-test-cases
[npm-url]: https://www.npmjs.com/package/create-test-cases
[license-shield-image]: https://img.shields.io/npm/l/create-test-cases
