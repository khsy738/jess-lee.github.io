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

  