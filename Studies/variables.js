/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * var: This keyword declares a variable and is used to create variables with
function-level scope in JavaScript. Variables declared using var are hoisted,
which means that they are moved to the top of the function in which they are
declared, regardless of where they are declared within the function. Hoisting
also means that the variables declared using var are available throughout the
execution of the function, even before they are assigned a value.

let: This keyword is used to create variables with block-level scope in
JavaScript. Variables declared using let are not hoisted, which means that they
are only available within the block in which they are declared and can't be
accessed outside that block.

const: This keyword is similar to let, but it creates a constant variable.
Variables declared using const cannot be reassigned or modified after they are
initially defined.


Hoisting is a phenomenon in JavaScript where variable declarations are "hoisted
(moved) to the top of the function, allowing them to be used within the function
before they are "formally" declared. This can be confusing to developers new to
JavaScript, as it can lead to unexpected behavior or errors if the variables are
accessed before they are declared.
 */