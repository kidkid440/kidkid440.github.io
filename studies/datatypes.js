/*
* 0. Data types are types of values, they come in two forms. Simple/Primitive &
* Complex.
*/

/* Simple/Primitive Data Types 
*
* What makes them Simple is that they don't hold other values nor collect them.
* They are copied by value not reference. Operation to them can return a new value
* but the original doesn't change. Copy by value means whenever a var is copied it
* doesn't change the original value it just copies the value to the new name.
*
* 1. Numbers- are any number value. Ex. 1, 26, 2018
*
* 2. Strings- are character values inside single or double quotation marks. Ex. "Stafford"
*
* 3. Booleans- are the values True and False. Ex. True & False
*
* 4. NaN- anything less than a number. Ex. Not A Number
*
* 5. Undefined- uninitialize values or no value. var define is undefined
*
* 6. Null- is when a value doesn't point to a object. Ex. var nothing = Null
*
* 7. Infinity and -Infinity- is greater than any number, it behaves the same as itself. 
*                Ex. Infinity * 1 = Infinity
*/

/*
* Complex Data Types can be infinte in size, can collect other values, they can be changed 
* and they copy by Reference. Copy by Reference means when a Complex Data is copied it 
* just points to the orignal value, because Complex Data Types can be so large it would eat up alot
* of space if fully copied. They also can hold any kind of value.
*
* 1. Arrays are containers that hold multiple elements at once. We hold the values 
* in [].The values that are input are accessed by index starting at 0.  
*                                        Ex.   var arr = [1, 2, 3];
*                                                         0  1  2
*
* To access the elements you have to use bracket notation. Ex. arr[1] = 2
*
* 2. Objects are containers that store values in key/value pairs. We hold these values
* in {}. Unlike arrays objects have no order, to access them you use the keys. 
*                                 Ex. var obj = {  
*                                       nameFirst: "Stafford",
*                                     nameLast: "Smith"
*
*                                    }
*
* To access the values in an Object we can use bracket notation or dot notation.
*                     Ex.  obj.nameFirst or obj[nameFirst] = "Stafford"
*
*
* 3.Functions are reusable blocks of code that prevents us from writting the same code 
* over and over.   Ex. function addNum(num1, num2){
*                            return num1 + num2;
*                      }
*
*                               console.log(addNum);
*/