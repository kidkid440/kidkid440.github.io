/*
* Operators:
*
* Java gives us many operators to change varibles. They can be broken up in this
* group.
*
*1. Assignment Operators which give values to the left of the operator based on 
*the value on the right.
*
*1a. The = sign is a simple assignment sign that assigns what value is on the right of 
*the sign to the left.  Ex.var arr = [];
*
*1b. the += Add and assignment operator takes the value on the right,adds it to the 
*left and the result is now the value for the left. Ex. c += b Same as (c = c + b).
*
*1c. The -= Subtract and assignment operator, subtracts what is on the right of the sign
*to the left and that is the new value for the left. Ex. (c -= b) Same as (c = c - b)
*
*1d. The *= Multiply and assignment operator, multiplies the right of the sign to the left
* and that is the new value for the left. Ex (c *= b) Same as (c = c * b)
*
*1e. The /= Divide and assignment operater, divides the left of the operator to the right. 
* The returned value is the new value of the left of the operator.  
*                                             Ex (c /= b) Same as (c = c / b)
*/

/*
* Logical Operators
*
*0. These operators usually return Boolean values.
*
*1. The && Logical & only returns True if both expressions are true.
*                           Ex if(6 < 10 && "red" === "red") // This equals true
*
*2. The || Logical or return True if only one of the expressions are True.
*                           Ex if(2 == '2' || 50 < 39) // This equals true
*
*3. The ! Logical Not return fasle if a single expression is true.
*                           Ex if(!6 === 5) // This equals true
*/

/*
* Arithmetic Operators
*
*0. Takes number vaules and reurns a single number.
*
*1. The + Addition Operator adds the number values together. Ex. (2 + 3) // returns 5
* 
*2. The - Subtraction Operator subtracts the number values. Ex (40 - 39) // returns 1
*
*3. The * Multiply Operator multiplies the number values. Ex (20 * 5) // returns 10
*
*4. The / Divide Operator divides the number values. Ex (50 / 10) // returns 5
*
*5. the % Remainder Operator divides to the number values but it returns what if left.
*                                                    Ex (4 % 3) // returns 1
*/

/*
* Comparion Operators
*
*0. They compare expressions and return a Boolean.
*
*1. The > Greater Than sign checks if the value on the left is greater than the right.
*                                                   Ex (6 > 4) // returns true
*
*2. The >= Greater Than or Equal To checks if the left value is greater than or equal
* to the right.                                    Ex (6 >= 6) // returns true
*
*3. The < Less Than checks if the value on the left is less than the right.
*                                                  Ex (6 < 4) // returns false
*
*4. The <= Less Than of Equal To checks if the value on the left is less than or equal
*  to the right.                                   Ex (50 <= 3) // returns false
*
* 5. The == Equality checks if the values or equal or not. Ex (4 == 4) // true
*
* 6. The === Strictly Equal checks if the values are Exactly the Same. 
*                                                  Ex (6 === '6') // false
*
*7. The != Not Equal checks if the values are Not equal. Ex (6 != '6') // false
*
*8. The !== Strickly Not Equal check to if the values are Exacly Not the same.
*                                                  Ex (6 !== '6') // true
*/

/*
* Ternary Operator
*
*1. The ? Trenary Operator is a conditional operator that has three operands. If
* condition is true it will return the truth expression and if false returns 
* false expression.    Ex 6 > 20 ? 'Is greater than' : 'Is less than'
*/

/*
* Unary Operaters
*
* 0. They operate on the object that is called.
*
* 1. The -- Decrement Operator operates on the given object down a count.
*                             var i = 5;
*                             i--   // i now equals 4
*
*2. The ++ Increment Operator operates on the given object up a count.
*                             var i = 0
*                             i++    // i now equals 1
* 
*3. The - Unary Minus takes away the value of the operand.
*                           Ex var num1 = 9
*                           var num2 = -num1 // num2 equals -9
*/