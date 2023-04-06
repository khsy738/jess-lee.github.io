/**
 * Primitive or simple data types are fundamental to programming
 * in JavaScript, and are stored in the memory as single values. Examples of
 * primitive data types in JavaScript include: Number, String, Boolean, undefined, and null. 
 * 
 * Complex or composite data types are made up of one or more
 * primitive data types and are used to represent more complex entities. Examples of
 * complex data types in JavaScript include: Array, Object, and Function.
 * 
 * It's important to note that in JavaScript, all data types are passed by
 * reference, meaning that if you pass an object or an array as an argument to a
 * function, any changes made to that object or array within the function will
 * reflect in the original object or array outside the function as well. This can be
 * useful in some cases, but can also lead to unexpected behaviors if not understood
 * properly.
 */

/**
 * JavaScript offers a wide range of data types, each with its own 
 * properties and behavior. Here is an example of each data type: 
 * 
 * 1. `undefined`: The value `undefined` is returned when a variable 
 * has not been assigned a value, or when an object property with that 
 * variable name does not exist. 
 * 
 * Example: `let x;`
 * 
 * 2. `null`: The value `null` is often used to indicate the absence of a 
 * value, or that a variable needs to be initialized. 
 * 
 * Example: `let x = null;`
 * 
 * 3. `boolean`: A Boolean value is either `true` or `false`. 
 * 
 * Example: `let isPositive = true;`
 * 
 * 4. `number`: A number value can be either an integer or a decimal number. 
 * 
 * Example: `let num = 42;`
 * 
 * 5. `string`: A string value is a series of letters, symbols, and/or numbers. 
 * 
 * Example: `let name = 'John';`
 * 
 * 6. `array`: An array is a collection of values of the same type, 
 * stored in sequential space in memory. 
 * 
 * Example: `let arr = [1, 2, 3, 4, 5];`
 * 
 * 7. `function`: A function is a set of instructions that can be 
 * called to perform a specific task. 
 * 
 * Example: `function printName() { console.log('hello') }`
 * 
 * 8. `object`: An object is an unordered set of named properties 
 * and their values, where the values can be of any data type. 
 * 
 * Example: `let obj = {name: 'John', age: 42};`
 * 
 */


/**
 * When a variable is passed to a function by reference, any 
 * changes made to the variable inside the function are reflected 
 * in the original variable when the function returns. In JavaScript, 
 * objects and array objects are passed by reference, while primitive 
 * values are passed by value: 
 */

function add1(a) {
    a += 1;
    return a;
  }
  
  const num = 10;
  console.log(add1(num)); // 11
  console.log(num);         // 10

  /**
   * When a variable is passed to a function by reference, 
   * any changes made to the variable inside the function are 
   * reflected in the original variable when the function returns. 
   * In JavaScript, objects and array objects are passed by reference, 
   * while primitive values are passed by value:
   */

  function add1(a) {
    a.push(1);
    return a;
  }
  
  const arr = [1, 2, 3];
  console.log(arr);            // [1, 2, 3]
  const result = add1(arr);
  console.log(arr);            // [1, 2, 3]
  console.log(result);         // [1, 2, 3, 1]