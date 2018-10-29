/*
* Control Flow.
*
* 0. We make decisions in our code by asking true or false statements. We then give 
* a block of code to run whether a given codition is true or false. We get this 
* done by using if, if else-if & switch statements.
*/

/*
* 1.if, else-if statements start with the word if then() inside it will be a test condition,
* if true the system will run what we put in {}. If false if will move to the next
* block of code which will be an else if condition. Same structure as the if 
* condition and you can have as many else if's as you need. So just in case none 
* of your conditions are true you need a else condition. That will automatically
* run if the else condition is reached.
*          Ex.   var color = "green";
*        
*              if(color === 'blue'){
*                console.log('The color is blue');
*               }else if(color === 'purple'){
*                   console.log('The color is purple');
*               }else if(color === 'blue'){
*                   console.log('The color is blue');
*               }else{
*                   console.log('The color is unknown');
*               }
*/

/*
* 2.Switch statement is used when a if statement might be to much to input. It takes
* a expression and runs it thru different cases. Each case has a statement to return if
* that given case is true. Each case has to have a break on the last line to stop
* the Switch from going to the next case. In the chance that none of your cases are met
* you need a default return, inputing the word default and the statement you want back.
*
*       Ex.      var color = 'red';
*              Switch(color){
             case 'blue':
               console.log('blue is my fav color!');
               break;
             case 'green':
               console.log('green is my fav color!');
               break;
             case 'red':
               console.log('red is my fav color!');
               break;
             default:
               console.log('I dont\' have a fav color!')
               }
*
*
*

*/