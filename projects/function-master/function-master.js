//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values - ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// objectValues() : Should take an object and return its values in an array

function objectValues(object) {
  return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// keysToString() : Should take an object and return all its keys in a string each separated with a space

function keysToString(object) {
  return Object.keys(object).join(' '); // the join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas 
}  

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// valuesToString() - returns all string values of an object as a string separated by spaces

function valuesToString(object) { // takes an object as an input parameter
  let result = ''; // empty string, will hold final result 
  for (let key in object) { // for in loop, because those loop through keys in objects
  if (typeof object[key] === 'string') { // typeof returns type of value, and here it's checking if a value is a string 
  result += object[key] + ' '; // executed if value is a string  
  }
  }
  return result.slice(0, -1); // .slice returns shallow copy of array 
  // it's taking the starting index [0] and the ending index [-1]
  }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(collection) {
  if (Array.isArray(collection)) { // The Array.isArray() static method determines whether the passed value is an Array 
    return 'array'; // if it's an array, it'll return the string 'array' 
    // if it's not, the else if is run
  } else if (typeof collection === 'object') { // The typeof operator returns a string indicating the type of the operand's value 
    return 'object'; // returns the string 'object' if the argument is an 'object'
  } 
}


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1); // .slice(1) chops off the string at the second index and concatenates it to string.charAt(0).toUpperCase()
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {
  let words = string.split(' '); // The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array
  for (let i = 0; i < words.length; i++) { // for loop that checks if the index/[i] is equal to the length of the array
    words[i] = capitalizeWord(words[i]); // capitalizies each word and assigns it back to it's original position 
  }
  return words.join(' ');// returns words as a string seperated by a space ' ' 
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'

function welcomeMessage(object) {
  return 'Welcome ' + capitalizeWord(object.name) + '!'; // uses dot notation to access the name property of the object argument
}  

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>' 

function profileInfo(object) {
  return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species); // uses dot notation to access the name and species property of the object argument
}  

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'

function maybeNoises(object) {
  if (object.noises && object.noises.length > 0) { // checks if the noise array isn't empty and exists within an object
    return object.noises.join(' '); // returns them as a string seperated with a space with dot notation  
    // dot notation is used to access the noises property of the object argument passed into the function
  } else { // runs if the if condition isn't met 
    return 'there are no noises'; // returns this string if there aren't any noises 
  }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

function hasWord(string, word) {
  let words = string.split(' '); // literally just checks if there's any spaces in a string
  return words.includes(word); // includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// addFriend() : Should take a name and an object and add the name to the object's friends array then return the object 

function addFriend(name, object) {
  object.friends.push(name); // push() method adds one or more elements to the end of an array and returns the new length of the array
  // accesses friends property from object 
  return object;
}  

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
  if (Array.isArray(object.friends)) { // the array.isArray() static method determines whether the passed value is an Array
    return object.friends.includes(name); // Array.prototype.includes(): the includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  } else { // executed if a friend is indeed not an object 
    return false;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function nonFriends(name, array) {
  let nonFriendsList = []; // variable with empty array to store names in 
  let person = array.find(function(item) { // The find() method returns the first element in the provided array that satisfies the provided testing function 
    // If no values satisfy the testing function, undefined is returned
    return item.name === name; // if there's a name, return the name 
  });
  if (person === undefined) { // if the person doesn't exist in an array - 
    return nonFriendsList; // this will return the empty array in nonFriendsList 
  }
  array.forEach(function(item) {
    if (item.name !== name && person.friends.indexOf(item.name) < 0) { 
      // checks if they're a friend 
      // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
      // . If item.name is not found in person.friends, -1 will be returned, which means that item is not a friend.
      nonFriendsList.push(item.name); // push their names into nonFriendsList if they don't show up as a friend 
    }
  });
  
  return nonFriendsList;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

function updateObject(object, key, value) {
  object[key] = value; // bracket notation: in the object[expression] syntax, the expression should evaluate to a string or Symbol that represents the property's name
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

function removeProperties(object, array) { // here, the parameters are an object (where the properties are slashed from) and an array of property names (that are to be removed)
  for (var property of array) { // for-of loop that operates on a sequence of values sourced from the array 
    if (object.hasOwnProperty(property)) { // hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)
      delete object[property]; // the delete operator removes a property from an object
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// dedup() : Should take an array and return an array with all the duplicates removed 

function dedup(array) {
  return [...new Set(array)]; // the spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
}

/** //// SYNTAX ////////// **
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}