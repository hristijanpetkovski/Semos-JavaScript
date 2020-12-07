// class Animal {
//   constructor(name){
//     this.name = name;
//   }

//   static type = 'Type1';

//   static speak(){
//     return `${this.names} says`;
//   }

//   eat (){
//     return `${this.name} eats`;
//   }
// }

// const animal = new Animal('Bob');
// animal.type;
// animal.name;
// animal.speak;
// animal.eat;

// console.log(Animal.type);
// // animal.speak();// the Animal object
// Animal.speak();// undefinded



// class Calculator {
//   constructor(a, b){
//     this.a = a;
//     this.b = b;
//   }

//   static sum(a, b){
//     return a + b;
//   }

//   mul(a, b){
//     return a * b; 
//   }

// }

// const cal = new Calculator(5, 4);
// cal.sum;
// console.log(Calculator.sum(5, 9));



class Person {
  constructor(firstName, lastName,){
  this.firstName = firstName;
  this.lastName = lastName;

  }
  
  get fullInformation(){
    return `${this.firstName}${this.lastName}`
  }
  
  helloStudent (){
    console.log(`Hello ${this.firstName} ${this.lastName}`); 
  }
}


//CHILD

class StudentSuccess extends Person {
  constructor(firstName, lastName, success){
    super(firstName,lastName);
    this.success = success;
  }

}

const studentSuccess = new StudentSuccess('Hristijan', 'Petkovski', 10);
console.log(studentSuccess);

