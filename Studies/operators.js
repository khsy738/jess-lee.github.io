/**
 * Operators are special characters used in JavaScript to
 * perform mathematical or logical operations. Operators 
 * can be used to perform arithmetic operations such as addition, 
 * subtraction, multiplication, and division, as well as bitwise 
 * operations, and logical operations such as AND, OR, and NOT. 
 * Operators in JavaScript are prefix, infix, and postfix operators, 
 * and can be used in expressions to represent math operations, logical
 *  operations, comparison operations etc.
 */

/// Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `|=`, `&=`, `^=`.

var arr = [1, 2, 3];
arr[1] = 5;

console.log(arr); // Outputs [1, 5, 3];

// Arithmetic operators: `+`, `-`, `*`, `/`.

var a = 10;
var b = 20;

var c = a + b;

console.log(c); // Outputs 30

 
// Comparison operators: `===`, `!==`, `>`, `<`, `>=`, `<=`, `==`, `!=`.

var a = 1;
var b = 2;

if (a == b) {
    console.log("a and b are equal");
} else {
    console.log("a and b are not equal");
}

 // Logical operators: `||`, `&&`.
 
var x = 5;
var y = 3;
var z = null;

if (x && y && z) {
    console.log("All three are true");
} else {
    console.log("At least one is false");
}

// Unary operators: `!` (NOT), `typeof` (returns the type of the operand), `-` (unary minus).
 
var x = 5;
var y = -x;

console.log(y); // outputs -5

// Ternary: `(condition) ? value1 : value2`.

var x = 10;
var y = 20;

if (x > y) {
    z = x * y;
} else {
    z = x + y;
}
console.log(z); // Outputs 40