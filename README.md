# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrewbradt/lotide`

**Require it:**

`const _ = require('@andrewbradt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Converts the string argument to lowercase and returns an object containing key/value pairs of unique occurring characters and number of occurrences.
* `head(array)`: Returns the first element of an array. 
* `middle(array)`: Returns a new array containing the middle element(s).  If the array contains an even number of elements, two elements are returned.
* `tail(array)`: Returns a new array without the first element of the array passed as an argument.
* `countOnly(allItems, itemsToCount)` : Returns a new object with properties for each item in the array ```allItems``` and corresponding property with a truthy value in ```itemsToCount```. The value of each property will be the number of occurrences a given key appears in ```allItems```.
* `eqArrays(array1, array2)` : Compares two one-dimensional arrays for strict equality and returns a boolean value.
* `eqObjects(object1, object2)` : Recursively compares two objects for strict equality and returns a boolean value. Nested array comparison TBD. 
* `findKey(object, callback)` : Iterates over the object providing a property's value as the argument to the provided callback. Returns the key of the first value which caused the callback to return a truthy value. 
* `findKeyByValue(object, matchingVal)` : Iterates over the provided object and returns the first key whose value strictly matches ```matchingVal```. 
* `flatten(array)` : Creates a one-dimensional copy of the input array.  Currently supports two-dimensional arrays.
* `letterPositions(string)` : Converts the ```string``` argument to lowercase and returns an object containing key/value pairs of unique occurring characters and an array of indices at which they occur.
*  `map(array, callback)` : Iterates over the array and uses the current element as an argument to the provided callback function.  Returns a new array where each element is the return value of the callback. 
* `takeUntil(array, callback)` : Iterates over the array invoking the callback for each element in the uppermost level of the array until the callback function returns a truthy value.  When the callback returns a falsey value, the current element is pushed into a new array.  Returns a subset of the array passed into the function. 
* `without(source, itemsToRemove)` : Returns a new array which contains elements from the ```source``` array which do not appear in the ```itemsToRemove``` array.  Currently supports one or two-dimensional arrays.