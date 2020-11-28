

// Deklariranje na funkcija

function nameOfFunction () {
  // block scope function
}

// Imenjuvanje na funkcija
// sayHi 
// addNumbers
// addProduct
// listOfProjects

// regular function
function greetings(){
  // code
  console.log('Hello there');
  return 'hi'
}
// console.dir(greetings);
greetings();
const greetingCopy = greetings();
console.log(greetingCopy);

function showMessage(){
  const message = 'Hello, I am JavaScript local variable';
  const finalMessage = `Hey ${message}`; 
  console.log(finalMessage);
}
showMessage();

let outerVariable = 'Jonh';

function showOuterMessage(){
  const meesage = `Hello, ${outerVariable}`;
  console.log(meesage);
  outerVariable = 'Miki'
  const modifyMessage = `Hello, ${outerVariable}` 
  console.log(modifyMessage);
}
showOuterMessage();

let 

//====================================================

function greetings(name){
   console.log(`${name} Hello there`)

}
greetings(['James', 'Jonny', 'Hi']);
console.log(name);

// =====================================

function speak(name, time){
  console.log(` ${time} - ${name} Hello there`)

}
const speaking = speak('James', 3);

//==============================================

function speak(name = 'Jenifer', time = '345'){
  console.log(` ${time} - ${name} Hello there`)

}
speak();
speak('Ana', 5);// Prioritet!! ja prebrisuva zadadenata druga vrednost!


// ===============================================

// function expression
const squareOfNumber = function (num) {
  return num ** 2;
};

const calcSquare = squareOfNumber(5);
console.log(calcSquare);