const sum = function (a,b) {
  return a + b;// return expersion
}

// Arrow function
// =>  - This is arrow ! 


const sumArrow = (a, b) => {
  return a + b
}
 
const sumShorter = (a, b) => a + b;

console.log('Function Expression', sum(2, 3));
console.log('Arrow Functiom', sumArrow(2, 3));
console.log('Shorter Arrow syntax', sumShorter(2, 3));


// Regular functiom

// const calcArea = function (radius){
//   const PI = Math.PI;
//   return PI * radius ** 2;
// }

// Arrow function

const calcArea = radius => 3.14 * radius ** 2;

const area = calcArea(7);
console.log(area);

// New exemple

const double = n => n * 2;
console.log(double(3));

//  New exemple

const userList = [
  {
    id: 1,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  },
  {
    id: 2,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  },
  {
    id: 3,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  }
]     // array of objects 


const listUsers = (users) => {
  const ids = []
  for ( let i = 0; i < users.length; i++){
    ids.push(users[i].id);
 }
 return ids;
}

console.log(listUsers(userList));


// New funcstion for add user 

const addUser = (users) => {
  const newUser = {
    id: 4,
    firstName: 'Bon',
    lastName: 'Marley',
    age: 20,
    gender: 'male'
  };
  return [...users, newUser];
}
console.log(addUser(userList));
  



