// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-staffordsmith');

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
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    let maleBox = 0;
    _.filter(array,function(element,i,array){
        if(array[i].gender === 'male'){
            return maleBox ++;
        }
    });
    return maleBox;
    
};

var femaleCount = function(array){
    let femaleBox = 0;
    _.filter(array, function(element,i,array){
        if(array[i].gender === 'female'){
            return femaleBox ++;
        }
    });
    return femaleBox;
};

var oldestCustomer = function(array){
    
    for(var i=0; i < array.length; i++){
    let wise = ( acc, cur ) => Math.max( array[i].age, array[i].age );
      if(array[i].age === array.reduce( wise )){
           return array[i].name;
      }
          
      
    }
    
    
};

var youngestCustomer = function(array){
    let baby = _.filter(array, function(element,i,array){
        if(array[i].age > 0){
            return array[i].age;
        }
    });
      for(var i; i < array.length; i++){
          if(Math.min(baby) === array[i].age){
              return array[i].name;
          }
      }
      
};

var averageBalance = function(array){
    var median = _.filter(array, function(element, i,array){
        return element.balance;
    });
    return median / median.length;
};

var firstLetterCount = function(array, letter){
    let customerCount = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].name[0].toUpperCase() === letter.toUpperCase()){
            customerCount ++;
        } 
    }
    return customerCount;
};

var friendFirstLetterCount = function(array,customer,letter){
    let customerCount = 0;
    for(var i = 0; i < array[customer].friends.length; i++){
        if(array[customer].friends[i][0].toUpperCase() === letter.toUpperCase()){
            customerCount ++;
        } 
    }
    return customerCount;
};


var friendsCount;

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
