/**
 * In JavaScript, a function's parameters are the values passed 
 * to the function when it is called. The parameters define what 
 * values the function expects to be passed to it. The arguments 
 * passed to a function are the actual values that are provided 
 * when the function is called. The arguments provide the values 
 * that the function uses to perform its operation.
 */

/**
 * A named function is a function that has a name. To 
 * create a named function, you can use the function keyword followed 
 * by the function's name in parentheses, and then add the function's 
 * parameter list in parentheses.
 */

// Here is an example:

function myNamedFunction(parameter1, parameter2) {
    // The body of the function
}
 /**
  * In this example, "myNamedFunction" is the name of the function that takes N parameters. 
  * The function body can contain any statements that you would like to execute when the 
  * function is calle
  */

 /**
  * In JavaScript, you can assign a function to a variable using the function keyword followed 
  * by the name of the function and the parameters that the function takes. For example, you can 
  * assign a function called "sayHello" that takes one argument to a variable called "myFunc" like this:
  */

 

const myFunc = function sayHello(name) {
    console.log('Hello ' + name);
};

/**
 * You can then call the function by using the variable name followed 
 * by any additional arguments you want to pass to the function. For 
 * example, you can call the "sayHello" function with a name argument of 
 * "John" like this:
 */

myFunc('John');

// This would output "Hello John" to the console.

/**
 * In JavaScript, when you define a function, you can specify its input 
 * parameters by listing them in the function definition after the function 
 * name. These parameters are also referred to as arguments or inputs, and 
 * they are used to pass data to the function. You can also specify the function's 
 * return type by adding a return statement at the end of the function and 
 * returning a value. The value can be any data type, such as a number, string, 
 * array, or even a whole object.
 */

// Here's an example of a function with input parameters and a return value:

function calculateArea(width, height) {
    // Calculate the area of a rectangle
    var area = width * height;
  
    return area;
  }

  /**
   * In this example, the function calculateArea takes two input 
   * parameters, "width" and "height", and returns the area of a 
   * rectangle based on those inputs. You can call the function with 
   * values for the inputs and it will return the area of the rectangle.
   */

  /**
   * Scope: Functions can see and modify variables in parent or global scopes. 
   * The inverse is NOT true. 
   * 
   * Closures: Functions form closures around the 
   * data they house. If an object returned from the Function and is held in 
   * memory somewhere (referenced), that closure stays ALIVE, and data can 
   * continue to exist in these closures! (See: our meeting-room app for an example!)
   */

  // To access variables from the outer scope of a function, you can use the global() function. 
  // The global() function allows you to reference variables declared outside the function, either on the top-level 
  // or inside another function.

let a = 1;  // global variable declared on the top-level
let b = 2;  // global variable declared on the top-level

function test() {
  console.log(global('a'));  // prints 1
  global('a', 3);  // updates the global 'a' variable
}

test();
console.log(a);  // prints 3

// To access variables declared in a block 
// (inside a curly brace ( { and } )), you can use the var 
// keyword to declare a variable in the block scope or use the let 
// keyword to declare a variable in the block scope which is a block scoped variable.

function test() {
    var a = 1;  // block scoped variable declared using the let keyword
    {
      var b = 2;  // block scoped variable declared using the let keyword
      console.log(b);  // prints 2
      console.log(a);  // produces an error: ReferenceError: a is not defined
    }
    console.log(a);  // prints 1
  }
  
  test();
  
  // Here's an example of closure 

  function makeCounter() {
    let count = 0;
  
    function incrementCount() {
      count++;
      console.log("The count is now " + count);
    }
  
    return {
      count: count,
      increment: incrementCount
    };
  }
  
  const counter = makeCounter();
  
  console.log(counter.count); // 0
  counter.increment();
  console.log(counter.count); // 1
  