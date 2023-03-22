/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
Open up the file functions.js in your editor.
Implement a function declaration called search that:
Takes a paramater representing an Array of animals.
Takes a paramater representing a String, the name of an animal on which to perform a search.
Looks through the animals Array, and returns the animal's Object if an animal with that name exists.
Returns null if no animal with that name exists
Use the search bar at the top of the page to make sure your function works.
*/
function search(animals, name) { // takes a paramater representing an Array of animals + a paramater representing a String, the name of an animal on which to perform a search.
  for (let i = 0; i < animals.length; i++) { // looks through the animals Array, and returns the animal's Object if an animal with that name exists.
  if (animals[i].name === name) { // checks whether the name property of the current object being iterated/going through the sequence in the loop matches the "name" parameter passed to the function. 
  return animals[i]; // returns the object
  }
  }
  return null; // returns null if no animal with that name exists
  }
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
Write a function declaration called replace with a signature of replace(animals, name, replacement) { //... }  that:
Takes 3 parameters, an Array of animals, a String representing the name of an animal on which to perform a search, and an Object that represents the replacement animal.
If an animal with that name exists within the animals Array, replace it's entire Object with the replacement Object.
Otherwise do nothing.
Preview the index.html page to test it on the website.
*/

/** 
functions are declared with the following syntax:

function functionName(parameters) {
// code to be executed
}

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

*/

// Write a function declaration called replace with a signature of replace(animals, name, replacement) { //... } 
function replace(animals, name, replacement) { // 3 parameters: an Array of animals, a String representing the name of an animal on which to perform a search, and an Object that represents the replacement animal.
  for (let i = 0; i < animals.length; i++) { // loop that will iterate/ go through each object one by one in the "animals" array
    if (animals[i].name === name) { // sees if an animal with that name exists within the animals Array
      animals[i] = replacement; // if it does, it's replaced with the replacement object
      return; // then return the function 
    }
  }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
Write a function declaration called remove with a signature of remove(animals, name) that:
Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
If an animal with that name exists within the animals Array, remove it.
Test that it works on the website.
*/
function remove(animals, name) { // takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
  for (let i = 0; i < animals.length; i++) { //loop that will iterate through each object in the "animals" array 
    // 
    if (animals[i].name === name) { // does the name property of the current object being iterated through in the loop matches the "name" parameter passed to the function?
      // bracket notation is being used to access the name property of each object in the animals array
      animals.splice(i, 1); // removes object from array with the splice method.  
      // first parameter to "splice" is the index of the element to remove. 
      // second parameter is the number of elements to remove (in this case, 1).
      return; // returns from the function 
    }
  }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
Write a function declaration called add with a signature of add(animals, animal) { //... } that:
Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
Checks that the animal Object has a name property with a length > 0.
Checks that the animal Object has a species property with a length > 0.
Has a unique name, meaning no other animals have that name.
Adds this new Object to the animals Array, only if all the other conditions pass.
Make sure it works.
This is called data validation and it's extremely important in web development!
*/
function add(animals, animal) { // takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
if (animal.name && animal.name.length > 0 && animal.species && animal.species.length > 0) { // checks that the animal Object has a name property with a length > 0 
  // checks that the animal Object has a species property with a length > 0
  let uniqueName = true; // has a unique name, meaning no other animals have that name
  for (let i = 0; i < animals.length; i++) { // adds this new Object to the animals Array, only if all the other conditions pass.
    if (animals[i].name === animal.name) {
      uniqueName = false;
      break; // loop is nuked utilizing a break statement.
    }
  }
  if (uniqueName) { // if it's indeed a unique name
    animals.push(animal); // it's pushed to the array
  }
}
}
/**
* You did it! You're all done with Matchy!
*/



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
