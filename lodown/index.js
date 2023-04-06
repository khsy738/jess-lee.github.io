'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes in an input value and returns the input value unchanged. 
 * 
 * @param { Any value } value: Function takes in any value;
 * @returns { Any value }: Function returns input value unchanged
 */

function identity(value){
    return value;
};

module.exports.identity = identity;
  
  /**
   * typeOf: function takes in an input value and returns the type of input value 
   * as a string. 
   * 
   * @param { Any value } value: function takes in any value;
   * @returns { String }: function returns type of input value as a string.
   */
  
  function typeOf(value){
    if (typeof value === 'string') {
      return 'string';
    } else if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'boolean') {
      return 'boolean';
    } else if (typeof value === 'function') {
      return 'function';
    } else if (value === null) {
      return 'null';
    } else if (typeof value === 'undefined') {
      return 'undefined';
    } else if (Array.isArray(value)) {
      return 'array';
    } else if (typeof value === 'object') {
      return 'object';
    }
  };
  
  module.exports.typeOf = typeOf;

  
  /**
   * first: Function takes in an array and a number. If the input array is not 
   * an array, an empty array is returned. If the input number is not 
   * given or is not a number, just the first element is returned.
   * 
   * @param {Array and a Number} array: Input array and number of items to return from array
   * @returns {Array} result: Return the first number items of input array, or an empty array.
   */
  
  function first(array, number) {
    let result = [];
    if (Array.isArray(array) === false) {
      return result;
    }
    if (typeof number !== 'number') {
      return array[0];
    }
    for (let i = 0; i < number; i++) {
      if (i < array.length) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  module.exports.first = first;

 /**
  * last: function that returns the last element(s) of an array, based on the input number.
  * @param {Array} array: the array to return last element(s) from.
  * @param {Number} number: the number of elements to return from the end of the array. 
  * If not given, return the last element in the array. If negative, return an empty array.
  * @returns {Array or Any value}: Returns an array of the last <number> elements in <array>. 
  */

 function last(array, number) {
  if (!Array.isArray(array)) {
    return [];
  } else if (typeof number !== 'number') {
    return array[array.length - 1];
  } else if (number < 0) {
    return [];
  } else if (number >= array.length) {
    return array.slice();
  } else {
    return array.slice(array.length - number);
  }
}

module.exports.last = last;

/**
 * indexOf: function takes in an array and a value and returns the index of the
 * first occurrence of the value in the array. If the value is not in the array,
 * the function returns -1. The function does not use the .indexOf() method.
 * 
 * @param {Array} array: The array to be searched
 * @param {Any} value: The value to search for in the array
 * 
 * @returns {Number} The index of the first occurrence of the value, or -1 if the
 * value is not in the array
 */

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          return i;
      }
  }
  return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: function takes in an array and a value and returns true if the value is
 * present in the array, false otherwise.
 *
 * @param {Array} array: The array to be checked for the presence of the value
 * @param {Any value} value: The value to be checked for in the array
 * @returns {Boolean}: Returns true if the value is present in the array, false otherwise.
 */

function contains(array, value){
  return array.includes(value) ? true : false;
}

module.exports.contains = contains;

/**
 * unique: function takes in an array and returns a new array of all 
 * elements from the original array with duplicates removed.
 * @param {Array} array: The array from which to remove duplicates.
 * @returns {Array}: Returns a new array of all elements from <array> 
 * with duplicates removed.
*/

function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
  if (_.indexOf(result, array[i]) === -1) {
  result.push(array[i]);
  }
  }
  return result;
  }
  module.exports.unique = unique;

/**
 * filter: function takes in an array and a function, and 
 * returns a new array of elements for which calling the function returned true.
 * @param {Array} array: The array to filter
 * @param {Function} func: The function to call for each element in <array>, 
 * passing the arguments: the element, its index, and <array>.
 * @returns {Array}: Returns a new array of elements for which calling <function> returned true.
*/

function filter(array, func){
  let result = [];
  _.each(array, function(element, index, array){
      if (func(element, index, array)){
          result.push(element);
      }
  });
  return result;
}

module.exports.filter = filter;

/**
 * reject: function takes in an array and a function, and returns a 
 * new array of elements for which calling the function returned false.
 * @param {Array} array: The array to filter
 * @param {Function} func: The function to call for each element in
 *  <array>, passing the arguments: the element, its index, and <array>.
 * @returns {Array}: Returns a new array of elements for which 
 * calling <function> returned false.
 */

function reject(array, func){
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (func(array[i], i, array) === false){ 
      result.push(array[i]);
    }
  }
  return result;
}

module.exports.reject = reject;

/**
 * partition: function takes in an array and a function and returns an array
 * with two sub-arrays. 
 * 
 * @param {Array} array - Array of values to partition
 * @param {Function} func - Function to be applied to each value in the array
 * @returns {Array} - Array that contains 2 sub-arrays
 */

function partition(array, func) {
  let truthyArr = [];
  let falsyArr = [];
  for (let i = 0; i < array.length; i++) {
    let result = func(array[i], i, array);
    if (result) {
      truthyArr.push(array[i]);
    } else {
      falsyArr.push(array[i]);
    }
  }
  return [truthyArr, falsyArr];
}

module.exports.partition = partition;

/**
 * map: function takes in a collection and a function, invokes the function on each
 * value in the collection, saves the return value of each function call in a new
 * array and returns the new array.
 * 
 * @param { Array or Object } collection: Function takes in an array or object
 * @param { Function } func: Function takes in a function
 * @returns { Array }: Function returns a new array containing the return value of
 * each function call
 */

function map(collection, func) {
  let result = [];
  if (typeof collection === 'object') {
      for (let key in collection) {
          result.push(func(collection[key], key, collection));
      }
  } else { 
      for (let i = 0; i < collection.length; i++) {
          result.push(func(collection[i], i, collection));
      }
  }
  return result;
}

module.exports.map = map;

/**
 * pluck: function takes in an array of objects and a property, then returns an
 * array containing the value of the specified property for every element in
 * the array. 
 * @param { Array } array: Function takes in an array of objects
 * @param { String } property: Function takes in a string that specifies the property
 * to be extracted from each object
 * @returns { Array }: Function returns an array containing the value of the specified
 * property for every element in the array
*/

function pluck(array, property) {
  return _.map(array, function(obj){
      return obj[property];
  });
}

module.exports.pluck = pluck;

/**
 * some: Function that takes in a collection and a function and returns true if
 * at least one element in the collection passes the function's test.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the
 * collection to test if the element passes the test.
 * @returns {Boolean} Returns true if at least one element passes the test,
 * otherwise returns false.
 */

function some(collection, test) {
  if (test === undefined) {
    for (let element of collection) {
      if (Boolean(element)) {
        return true;
      }
    }
    return false;
  }
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (Boolean(test(collection[i], i, collection))) {
        return true;
      }
    }
  } else {
    for (let key in collection) {
      if (Boolean(test(collection[key], key, collection))) {
        return true;
      }
    }
  }
  return false;
}

module.exports.some = some;

/**
 * reduce: Function that takes in an array, a function, and a seed (optional) and
 * returns the final value obtained by applying the function to the array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The function to be applied to each value in the array
 * to obtain the final result.
 * @returns Returns the final result obtained by applying the function to
 * the array.
 */
_.reduce = function(array, func, seed) {
  let result;
  if (seed === undefined) {
    result = array[0];
    for (let i = 1; i < array.length; i++) {
      result = func(result, array[i], i, array);
    }
  } else {
    result = seed;
    for (let i = 0; i < array.length; i++) {
      result = func(result, array[i], i, array);
    }
  }
  return result;
};

module.exports.reduce = _.reduce;

/**
 * extend: Function that copies properties from one or more source objects
 *  to a target object.
 * 
 * @param {Object} target: The target object to copy properties to.
 * @param {Object} ...sources: The source objects from which to copy properties from. 
 * Multiple objects can be passed as arguments.
 * @returns {Object} target: The updated target object with properties from the source 
 * object(s) copied over.
 */

function extend(target, ...sources) {
  return Object.assign(target, ...sources);
}

module.exports.extend = extend;