/**
 * While loops are used to repeatedly execute a block 
 * of code until a condition becomes false. The condition 
 * is checked at the start of each iteration and if it is 
 * true, the block of code is executed and the loop continues. 
 * Once the condition becomes false, the loop terminates.
 * 
 * For loops are used to iterate over a collection of values 
 * or objects one at a time. The loop executes a block of code 
 * for each item in the collection. The loop statement has two parts: 
 * an initialization expression, which sets the initial value of an 
 * iterator variable, and a condition, which determines when the loop 
 * should stop executing.
 * 
 * For-in loops are used to iterate over the properties of an object. 
 * The loop executes a block of code for each property of the object. 
 * The loop statement has two parts: a declaration of the iterator variable
 * and a condition, which determines when the loop should stop executing.
 */

// While loop example:

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// For loop example:

for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];  // This is the loop iteration variable.
    console.log(value);
  }

// For-in loop example:

let myObject = {key1: "value1", key2: "value2"};

for (let property in myObject) {
  let value = myObject[property];  // This is the loop iteration variable.
  console.log(property + " = " + value);
}

/**
 *  The for loop has three statements: the initialization statement, 
 * the condition statement, and the update statement. The initialization 
 * statement is executed before the loop begins. It defines any variables and sets their initial values. 
 * 
 * The condition statement is a Boolean expression that is evaluated before each iteration 
 * of the loop. If the expression evaluates to true, the loop executes the statements 
 * inside the loop until the condition is no longer true. If the expression evaluates 
 * to false, the loop does not execute the statements inside the loop.
 * 
 * The update statement is executed after each iteration of the loop. 
 * Its purpose is to update one or more variables used inside the loop. 
 * In the case of a  for loop, the update statement modifies the loop 
 * variable, which controls the number of times the loop iterates.
 */

// Iterating through an array forwards

var myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// and backwards

var myArray = [1, 2, 3, 4, 5];
var reversedArray = myArray.reverse();

for (let i = reversedArray.length - 1; i >= 0; i--) {
  console.log(reversedArray[i]);
}
