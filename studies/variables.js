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

/*
* 1. let
*
* let is just like variables but they are block scope to function and loops. They do not have 
* to be initialized.
*                                         Ex let num = 2;
*                                            if(num === 2){
*                                               num = 3
*                                           
*                                             console.log(num) // num = 3    
*                                              }
*                                              console.log(num) // num = 2
*
*2. const are scope to global or local depending on where it is delcared. Unlike let they have 
* to be initialized when declared.  Ex var num = 2;
*                                      if(num === 2){
*                                      const num1 = 3
*                                  
*                                      console.log(num1) // num1 equals 3
*                                    }
*                                      console.log(num1) // num1 equals undefined
*/

/*
* Hoisting
*
* 1. Allows you to intialize and use different data types like functions and variables before 
* they are declared.             Ex num = 4;
*                                   console.log(num); // num equals 4
*                                   var num;
*/