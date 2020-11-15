// First Level Hello World

const parameterVariable = 'Welcome to 10 Days of JavaScript!'

function greeting(parameterVariable) {

    console.log('Hello, World!');
    console.log(parameterVariable)
}
 
// Second Level Data Types

const secondInteger = 12;
const secondDecimal = 4.32;
const secondString = 'is the best place to learn and practice coding!';
function performOperation(secondInteger, secondDecimal, secondString) {
   
    const firstInteger = 4;
    const secondNumber = Number(secondInteger);
    console.log(firstInteger + secondNumber)
   
   
    const firstDecimal = 4.0;
    var secondDecimal =Number(secondDecimal)
    console.log(firstInteger + secondDecimal)
   
    const firstString = 'HackerRank ';
    console.log(firstString + secondString)
}

// Third Level Arithmetic Operators

const length =Number(3);
const width =Number(4.5);
function getArea(length, width) {

  let area;
   area = length * width

   return area;
}

function getPerimeter(length, width) {
   let perimeter;
   return perimeter;
}

// Fourth Level Let and Const 

function main() {
  const r =readLine();    
  let area = (Math.PI * (r * r)); 
  let perimetar = (2 * Math.PI * r);
  
  console.log(area);
  
  console.log(perimetar);
}