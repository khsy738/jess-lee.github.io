/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
////////////////////////////////////////////////////////////////////// 
/** 
 Open up the file data.js.
 Create a variable named animal and assign it to an empty object.
 Using dot notation give animal a property named species with a value of any animal species.
 Using bracket notation give animal a property called name with a value of your animal`s name.
 Using either notation, give animal a property called noises with a value of empty array.
 Print your animal Object to the console by adding, console.log(animal);,
 Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what animal looks like.
 It should be something like:
{ species: 'duck', name: 'Jennifer', noises: [] }
*/
var animal = {};

animal.species = 'duck';
animal['name'] = 'Jennifer';
animal.noises = [];

console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
 Create a variable named noises and assign it to an empty array.
 Using bracket notation give noises it's first element. A string representing a sound your animal might make.
 Using an array function add another noise to the end of noises.
 Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 Look through the functions until you find the one that will place an element at the begining of the array.
 Add an element to noises using this function.
 Using bracket syntax again, add another element to the end of noises. Make sure that the way you do this step would work no matter how many elements noises had. In other words, don't hard code the position of the new element.
 console.log the length of noises
 console.log the last element in noises again without hard coding the index.
 console.log the whole array.
 Does it look right?
*/
var noises = [];
noises[0] = 'quack';
noises.push('honk');
noises.unshift('sneeze');
noises[noises.length] = 'croak';

console.log(noises.length); 
console.log(noises[noises.length - 1]); 
console.log(noises); 
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
 Using bracket syntax, assign the noises property on animal to our new noises array.
 Using any syntax add another noise to the noises property on animal.
 console.log animal.
 Does it look right?
*/
animal['noises'] = noises;
animal.noises.push('coo');
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  An object property can be accessed in two ways. One is . property and the other is [property]
 * 2. What are the different ways of accessing elements on arrays?
 *  An item in a JavaScript array is accessed by referring to the index number of the item in square brackets.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
Create a variable named animals and assign it to an empty array.
 push our animal that we created to animals. You should now see your first animal appear on your index.html page!
 console.log animals. What does it look like?
 Create a variable called duck and assign it to the data:
{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
 push duck to animals
 console.log animals. What does it look like?
 Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 console.log animals, and, console.log the length of animals. Is everything looking right?
*/
var animals = [];

animals.push(animal);

console.log(animals);

let duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

console.log(animals);

let cat = {
  species: 'cat',
  name: 'Kit',
  noises: ['meow', 'purr', 'hiss']
};

let dog = {
  species: 'dog',
  name: 'Star',
  noises: ['bark', 'growl', 'whine']
};

animals.push(dog, cat);

console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/** 
Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

 Choose a data structure for this list of friends.
 Write a comment in your code that explains why you chose this data structure.
 Create a variable called friends and assign it to the data structure that you chose.
 Take a look at the documentation for Math.random here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 Write a function called getRandom that takes our animals array and returns a random index of the input array, using Math.random
 Using a random index from this function that you just created, get a random animal and add its name to friends.
 console.log friends.
 Using bracket notation, add the friends list as a property also named friends on one of the animals in the animals array
 console.log your work.
*/

// I picked array geninuely only because everything prior was also an array
var animals = [duck, duck, cat, dog];

var friends = [];

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}

friends.push(animals[getRandom(animals)].name);

console.log(friends);

animals[0]['friends'] = friends;

console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}