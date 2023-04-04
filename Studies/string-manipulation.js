/**
 * String manipulation in JavaScript is the process of modifying and changing the 
 * content of a string. This can be done through using operators or string methods. 
 * Operators such as +, - , *, and / can be used for string concatenation, subtraction, 
 * multiplication, or division. String methods on the other hand can be used for more 
 * complex operations such as uppercase, lowercase, trim, split, and replace. String 
 * methods are functions that are part of the string object and can be used to manipulate 
 * the content of a string.
 */

// Using operators:

var str1 = "Hello World!";
var str2 = "Hello Universe!";

var str3 = str1(0, 5) + str2; // Concatenate str1 with str2 after first 5 characters of str1

var str4 = str3 + "!"; // Concatenate str3 with exclamation mark

console.log(str4); // Hello Hello Universe!

// Using string methods:

var str1 = "Hello World!";
var str2 = "Hello Universe!";

str1 = str1.substring(0, 5); // Get first 5 characters of str1

str2 = str2.toLowerCase(); // Convert str2 to lowercase

str3 = str1 + str2; // Concatenate str1 and str2

console.log(str3); // hello hello universe!