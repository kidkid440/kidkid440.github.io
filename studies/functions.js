/* 
* Functions:
*
* 0. Are reusable blocks of that we can use later on.You can use it whenever you 
* need and as many times as you need. Helps to prevent writting same
* code over and over.
*
* 1a.There are two stages to using a Function first is Declaration/Definition. This is when we 
* start the peocess of making the Function and giving it a name. First we start 
* with the word function this lets the computer know this following code is to be
* reused. Next we must give our Function a name that is relatable to the actions
* of the Function. We also have to give the 
* instrutions that we want ran here.This will be everything inside the curly
* barckets {}. Since we need this reusable we DO NOT hard code
* variables instead we use Parameters in there places. Parameters are place holders
* that we use inside of our Function body. It gives our code
* block flexability. 
*        The word function    functionNwame( parameter1,  parameter2)
*         Ex. Function addNum  (num1, num2){
*               In this area you input your reusable code block.
*     Ex. return num1 + num2;    func.body
* }

*
* Second stage is Calling or Invocation of the Function. Here we are requesting that 
* the new Arguments get past thru our code block in place of the Parameters. This 
* consist of two parts Function name and our Arguments. The number of 
* Arguments has to be the same as the Function Declaration Parameters.
*  Ex.    addNum(10,20);
*       functionName
*/

/*
* 2. Parameters are place holders for our values. Arguments are the values the 
* code block will use in the body of the Function.
*     See   Examples Above.....
*/

/*
* 3. Syntax for named Funtion.
*    Function functionName(para1, para2)
*/

/*
* 4. Assigning a function to a Variable.
*   var myFunctionAddNum = function(parameter1, parameter2){
*    body/code block
*  }
*/

/*
* 5. We specify inputs with Arguments and u specify outputs with your code block
* inside the body of the function.
*/

/*
* 6. Functions can see both parent and global and it can modify variables in both.
*
*
*
*/

/*
* 7. Function Closures
*
*      function functionName(){
         var name = 'Stafford';
          return function(){
            return 'Stafford'
  }
}
     var getName = functionName();

         getName();
*/
