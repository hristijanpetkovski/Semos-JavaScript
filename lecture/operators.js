// Assigment operator
// = 
const hasBook = true;


// Arithmetic operators 
// + (addition) a + b
// - (subtraction) a - b
// * (multiplication) a * b
// / (division) a / b
// % (remainder{ostatok od nesto}) a / b (10 % 3), 1
// ** (exponent) 5 ** 2 (25, as 5 * 5)

const firstName = "Toni"
const lastName = "Parker"

// // blank spase with '  '
// //wrong const stringA = '1name';



const Fullname = firstName + lastName;
console.log(Fullname) // ToniParkeer


const nameWithSpace = firstName + ' ' + lastName;
console.log(nameWithSpace)


const numberA = 25;
const numberB = 15;
const numberC = 20.55;
const numberD = 150;


const sum = numberA + numberB + numberC + numberD;
console.log (sum);   //Pecatenje na vrednosta

const diff = numberA - numberD;
console.log(diff);

const multi = numberB * numberC;
console.log(multi);

const remainder = numberD % numberB;
console.log(remainder)

const exponent = numberA ** numberB; 
console.log(exponent)

// Comparison operators
// < (less then) 8 < 6 
// > (greater then) 8 > 6 
// <= (less than or equal to) 8 <= 10 (true)
// >= (greater than or equal to) 8 >= 5 (true)\
// == (both values are same) 15 == '15'
// === (strick equality) left and rigth values are identical to one another 15 === 15 (true) , 15 ==== '15' (false), 5 === 3 + 3 (false)
// !== (stict non equality {razlicno}) left and right values are NOT  || - || - 5 !== 2 + 3 
     
//Exemples
// islessThan (Good way to)
const lessThan = numberA < numberB ;
console.log(lessThan)

const greaterThan = numberA > numberC ; 
console.log(greaterThan)

const lessOrEqual = numberA <= numberB;
console.log(lessOrEqual)

const bothEquals = 15 == 15;
console.log(bothEquals)

const strictEquality = 15 === 15 ;
console.log(strictEquality);

const strictNonEquality = 5 !== 2 +3;
console.log(strictNonEquality)
