Re-lodash
=
This project is An re-implementation of the [Lodash Library](https://lodash.com/docs/4.17.15) using plain Javascript.

The project contains ten methods that add new functionality for numbers, strings, objects, and arrays.

## Methods

These are the Loadash functions re implemented from Lodash

1. [clamp](https://lodash.com/docs/4.17.15#clamp)
2. [inRange](https://lodash.com/docs/4.17.15#inRange)
3. [words](https://lodash.com/docs/4.17.15#words)
4. [pad](https://lodash.com/docs/4.17.15#pad)
5. [has](https://lodash.com/docs/4.17.15#has)
6. [invert](https://lodash.com/docs/4.17.15#invert)
7. [findKey](https://lodash.com/docs/4.17.15#findKey)
8. [drop](https://lodash.com/docs/4.17.15#drop)
9. [dropWhile](https://lodash.com/docs/4.17.15#dropWhile)
10. [chunk](https://lodash.com/docs/4.17.15#chunk)

## Testing
The main file containing all our methods is the `_.js` file in the root path. To test a method, access the testing files in the test folder using node

```
	node test/<function name>.js
```

To run your own tests, 

* Inspect the Lodash documentation or the test files to understand how the methods should be used
* Create a file for all your custom tests
* Add the `_.js` file as a dependecy to your testing file
* Access a method by calling it on the 'Lodash'(`_`) Object as such `_.<module name>(<arguments>)`
* Run it in the console or any other environment of your choice



 folder should be run on Node and there is a test for every method in the main object module. 

To run a file using node, we type the ```node``` command in a command line followed by the name of the file. For example, to run the main file we are working on, we would run ```node _.js```.

Our test files are all located in the test/ directory. To run the test suite for this task, type ```node test/lodash.js``` in your terminal and then press enter. The test will either throw errors if something is not currently working properly in your code or will print a success message to the console if your code is good to go.
