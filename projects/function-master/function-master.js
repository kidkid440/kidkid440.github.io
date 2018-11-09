//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var arr = [];
for(var key in object){
    arr.push(object[key]) ;
}
return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var arr = [];
for(var key in object){
    arr.push(key);
}
return arr.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
var arr = [];
for(var key in object){
    if(typeof object[key] === 'string')
    arr.push(object[key]);
}

return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(collection instanceof Array){
        return 'array';
    } else if(collection instanceof Date === false && collection !== null){
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
   return string.charAt(0).toUpperCase() + string.slice(1);

    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(' ');
    for(var i = 0;i < arr.length;i++){
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
var str = '';
str += object.name;
return 'Welcome'.concat(' ', str.charAt(0).toUpperCase() + str.slice(1), '!');
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var str = object.species;
var str2 = object.name;
return str2.charAt(0).toUpperCase() + str2.slice(1).concat(' ', 'is a',' ', str.charAt(0).toUpperCase() + str.slice(1));
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(object.hasOwnProperty('noises') && object.noises.length > 0){
    return object.noises.join(' ');
} else {

    return 'there are no noises';
    
}
    
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var arr = string.split(' ');
 for (var i = 0; i < arr.length; i++){
     if( word === arr[i]){
         return true;
     }
     
         
 }
       return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object['friends'].push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //var arr = object['friends'];
    if(object.hasOwnProperty('friends')){
    for(var i = 0;i < object['friends'].length;i++){
        if(name === object['friends'][i]){
            return true;
        }
        }
    }
        return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var notFriends = [];
    
    
    
    for(var i = 0;i < array.length;i++){
        if(array[i].friends.join(' ').includes(name) === false && array[i].name !== name){
         notFriends.push(array[i].name);
        } 
            
        }
    
    return notFriends;
    
    
       
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
if(!object.hasOwnProperty([key])){
 object[key] = value;
 return object;
}else {
    object[key] = value;
    return object;
}
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for(var i = 0;i < array.length;i++){
       if(Object.keys(object).join(' ').includes(array[i])){
           delete object[array[i]];     
           
       }
    }
    

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var arr = [];
for(var i = 0;i < array.length;i++){
    if(arr.indexOf(array[i]) < 0){
       arr.push(array[i]);
    }
}
return arr;
}

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