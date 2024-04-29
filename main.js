let myNumber = 10;

console.log(myNumber);

const mainObjectsFirst = ["cars", "chairs", "tables", "mecillanous"];
//Adds to the first position in the array
    //mainObjectsFirst.unshift("Plates");

//Adds to item to the last position of the array
    // mainObjectsFirst.push("couch");
//Removes the last value in an array
    //mainObjectsFirst.pop();
console.log(mainObjectsFirst);

let mood = 'dark';
console.log(mood);

console.log(mood);
myNumber += ' ' + mood + ' ' + mainObjectsFirst[2];
console.log(myNumber);
console.log(mood.length);
console.log(typeof mood);
console.log(mainObjectsFirst);

let person = {
    name: 'Peterson',
    Age: 35,
    Tel: 765432
};
console.log(person);

if (myNumber < 25){console.log('Ok')
}else{
    console.log('Keep tryning')
};
console.log(myNumber - 30);

//The function Number converts a value to a number
//let newNumber = Number(prompt('pick a number'));
//console.log('Your number is the sqr root of' + ' ' + newNumber * newNumber);

//loop
let pyramidStarter = 0;
while (pyramidStarter < 12){
    console.log(pyramidStarter);
    pyramidStarter += 2;
}


//Pyramid Exercise
let pyramidStart = '#';
while (pyramidStart !== '###############'){
    console.log(pyramidStart);
    pyramidStart += '#' ;
}

for (let myNumber = 0; myNumber <= 12; myNumber += 2){
    console.log(myNumber);
}

//First JavaScript Sucessful exercise (FizzBuzz Exercise)
for (let testNumber = 1; testNumber < 100; testNumber++){
   if(testNumber % 5 ===0 && testNumber % 3===0){
        console.log('FizzBuzz');
     }else if(testNumber % 5===0){
        console.log('Buzz')
     }else if(testNumber % 3===0){
        console.log('Fizz')
     }else {
        console.log(testNumber);
    }
}

//Chessboard Excercise (Revisit)
let boardPiece = ' # # # #\n' + '# # # # \n' + ' # # # #\n' + '# # # # \n' + ' # # # #\n' + '# # # # \n' + ' # # # #\n' + '# # # # \n';
let pieceStarter = ' # # # #\n' + '# # # # \n'
let boardPieceSize = boardPiece.length;
let newNumber = Number(prompt('pick a number'));
/*This is me trying the multiple
 line comment bn putting down my 
 thought on the next part of this problem.
Trying to figure out how my code should
 repeat the starter piece a given number
  of time depending on the number 
  provided in the prompt function.
  My first thought is to use a 
  for loop to get mulpiples of 8
  and repeat the pieceStarter 
  the number of times that division gives.
*/
console.log(boardPieceSize);
while (newNumber > boardPieceSize){
    boardPiece += pieceStarter;
}
console.log(boardPiece);