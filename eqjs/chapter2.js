// Exercise: Looping a Triangle

    for(let i = '#'; i.length < 8; i += '#'){
        console.log(i);
    }


// Exercise: Fizzbuzz

for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

// Exercise: ChessBoard
var game = '';
var changeSize = 8;
for(var e = 0; e < changeSize; e++){
for(var s = 0; s < changeSize; s++){
    if((s + e) % 2 === 0){
        game = game + ' ';
    }else {
        game = game + '#';
    }
}
game += '\n';
}
console.log(game);






