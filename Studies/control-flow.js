/**
 * Control flow is the sequence of instructions that a 
 * computer program follows to perform a task or set of 
 * tasks. In JavaScript, control flow is controlled through 
 * the use of conditional statements such as the `if` statement, 
 * the `else if` statement, and the `else` statement.The `if` 
 * statement allows the program to execute a block of code if 
 * a specified condition is true. 
 */

// For example, the following code will print "yes" if the value of `x` is greater than 1:

if (x > 0) {
    console.log("x is positive");
  } else if (x < 0) {
    console.log("x is negative");
  } else {
    console.log("x is zero");
  }

  /**
   * The `else` statement allows the program to execute a block of 
   * code if none of the previously evaluated conditions were true. 
   * This is useful for executing a block of code that should only 
   * run if none of the previous conditions were met.
   */

  // For example 

  if (x === 2) {
    console.log("x is 2");
  } else if (x > 2) {
    console.log("x is greater than 2");
  } else if (x < 2) {
    console.log("x is less than 2");
  } else {
    console.log("x is not between 2 and 10");
  }

  /**
   * The `switch` statement is also a form of control 
   * flow that is used to execute a block of code based 
   * on the value of a variable. The `switch` statement 
   * is useful when you have multiple cases to test, and it 
   * also allows for fall-through execution if a match is 
   * found at some point.
   */