# create-test-cases

Node.js function that creates test cases based on the specified inputs and outputs.
Decrease the time taken to write simple test cases using this framework agnostic function.

**Note** This tool expects that the testing framework in use follows the common conventions.

## Installation

```sh
$ npm install create-test-cases
```

## API

```js
const createTestCases = require("create-test-cases");
```

### createTestCases(testData, fnToTest)

Will create a describe blocks specifying all of the parameters passed to the function, and an it block
for each of the test cases displaying the expected return value.
**Note:** It is advised to call the function inside of a describe block.

#### testData

The testData parameter is an array of test cases objects, said objects may contain the following keys:

##### inputs

Array of parameters to be passed to the currently testing function

##### expectedOutput

Expected return value from the currently testing function

##### matchers

Array of matchers to be used in the test case. **Default:** ["toBe"].
**Note:** Check your framework's documentation to see a list of the valid matchers.

#### fnToTest

Function in which the test cases will be based.

## Examples

This example demonstrates how to create test cases using the createTestCases function.

```js
const createTestCases = require("create-test-cases");
const testData = [
	{
		inputs: [true],
		expectedOutput: true,
		matchers: ["toBe"]
	},
	{
		inputs: [false],
		expectedOutput: true,
		matchers: ["not", "toBe"]
	},
	{
		inputs: ["Hello"],
		expectedOutput: "Hello"
	}
];

const testFunction = input => input;

createTestCases(testData, testFunction);
```

## License

[MIT](LICENSE)
