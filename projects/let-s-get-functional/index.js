// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); // { filter: function(), map: function(){} }

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jess-lee.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/*
filter 
    // best for problems when you are searching for items that meet a certain condition 
map
    // best for problems when you want to return a new array with every item "motified"
reduce
    // best for when you want to accumulate a single return value 

*/
var maleCount = function(array) {
    // use _.filter() to return an array of only male customers 
    // iterate through collection and pass each object as a test function 
    // if "test function" returns true, item is pushed to an output array
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    }); // [ {male}, {male}, {male} ]
    return males.length;
};

var femaleCount = function(array){
    // use _.reduce() to accumulate the number of female customers 
    let females = _.reduce(array, function (accumulator, current){ // number of female customers | current item 
        // accumulator = 0 | current = { name: 'Adele Mullin', gender 'female }
        if (current.gender === 'female') {
            accumulator += 1;
        }
        return accumulator; 
    }, 0);
    // return number of female customers returned above 
    return females;
};

/*
// invoke reduce 
    // seed is defined? TRUE
        result = 0
        // iterate 
            // 0
                // result = func(0, {0}, 0, [customers])
*/
var oldestCustomer = function(array) {
    // use _.reduce() to find the customer with the highest age
    let oldest = _.reduce(array, function (accumulator, current){ // highest age customer | current item 
        // accumulator = { age: 0 } | current = { name: 'Adele Mullin', age: 29 }
        if (current.age > accumulator.age) {
            accumulator = current;
        }
        return accumulator; 
    }, { age: 0 }); // initialize accumulator to object with age: 0
    // return the name of the oldest customer
    return oldest.name;
};

var youngestCustomer = function(array) {
    // use _.reduce() to find the customer with the lowest age
    let youngest = _.reduce(array, function (accumulator, current){ // lowest age customer | current item 
        // accumulator = first customer in array | current = { name: 'Adele Mullin', age: 29 }
        if (current.age < accumulator.age) {
            accumulator = current;
        }
        return accumulator; 
    }, array[0]); // initialize accumulator to first item in array
    
    // return the name of the youngest customer
    return youngest.name;
};

var averageBalance = function(array) {
    // use _.reduce() to accumulate the total balance of all customers
    let totalBalance = _.reduce(array, function(accumulator, current) {
        // accumulator = 0 | current = { name: 'Adele Mullin', balance: '$3,868.37' }
        // remove dollar sign and commas from balance string and convert to a number
        let balance = Number(current.balance.split('$').join('').split(',').join(''));
        return accumulator + balance;
    }, 0);

    // divide total balance by number of customers to get average balance
    return totalBalance / array.length;
};

var firstLetterCount = function(array, letter) {
    // use _.filter() to return an array of customers with names starting with the given letter 
    let matchingCustomers = _.filter(array, function(customer){
        return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
    });
    // return the number of matching customers
    return matchingCustomers.length;
};

var friendFirstLetterCount = function(array, customerName, letter) {
    // find the customer object with the given name
    let customer = _.find(array, function(cust) {
      return cust.name === customerName;
    });
  
    // if customer is not found, return 0
    if (!customer) {
      return 0;
    }
  
    // use _.reduce() to accumulate the number of friends with names starting with the given letter
    let friendCount = _.reduce(customer.friends, function(accumulator, friend) {
      // check that friend's name is defined before calling toLowerCase()
      if (friend.name && friend.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
  
    return friendCount;
  };

  var friendsCount = function(array, customerName) {
    // use _.filter() to find all customers who have a friend with the given name
    let customers = _.filter(array, function(cust) {
      return _.some(cust.friends, function(friend) {
        return friend.name === customerName;
      });
    });
  
    // use _.map() to extract the names of the customers
    let customerNames = _.map(customers, function(customer) {
      return customer.name;
    });
  
    // return the array of customer names
    return customerNames;
  };

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
