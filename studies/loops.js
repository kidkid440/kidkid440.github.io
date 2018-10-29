/*
* 0. Loops.
*
* 1. While Loop is a block of code that loops as long as ONE condition in 
* parenthesis is True. You start with a variable that sets the start for the loop.
* What you want your While loop to do everytime it loops goes in the curly brackets.
* The ending of this loop is VERY IMPORTANT. You must increment or decrement
* depending on the loop. If not you will create and infinite loop which will crash
* your system.
*     
*     ex.     var i = 0;
*             while(i < 10){
*             console.log(i);
*             i++;
*             }
*/

/*
* 2. For Loop is used over arrays when we need to loop for an unknown number of times.
* You start the For loop with the word for then parenthesis. Inside the () goes 
* three statments the loop will follow. Start by setting a variable to use in the loop
*  this will be the starting point of the loop. Which will start at the begining
* of the Array. You must separate the statements with semi-colons. Next as long as this next
* statement is True the loop will loop. Next how you want to increment the loop
* UP. What you want your loop to do each time goes in the curly 
* brackets{}.
*             Ex.    for(var i = 0; i < arr.lenght; i++){
*                       console.log(arr[i]);
*                  }
*
* 2a. For Loop backward is the same concept as above except this time your going 
* backwards thru the Array .Your opening statement should start at the end of 
* the Array. Next long as this statement is true the loop will run. Then you want to 
*  set a decrement for the loop.
*                     Ex.          for(var i = arr.length -1; i >= 0; i--){
*                                    console.log(arr[i]);
*                                  }
*/

/*
* 3. For-in Loop is for when you need access to Object key value pairs. Start with 
* the word for then () inside it you input var key in (your Objects name). Inside
* the {} you input whether you what keys or values or both.
*
*            Ex. for(var key in obj){
*                 console.log(key);
*                 cconsloe.log([key]);
*             }
*/