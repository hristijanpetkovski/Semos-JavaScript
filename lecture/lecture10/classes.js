// ============  CLASSES ==================

class Person {
  constructor(firstName, lastName){
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName(){
    return `${this._firstName} ${this._lastName}`
  }

  get firstName(){
    return `${this._firstName}`;     // GETERI prima property no ne vrakja
  }

  get lastName(){
    return `${this._lastName}`;
  }

  set firstName(firstName){
    this._firstName = firstName;  // SETER dodeluva property !! Sekoj geter ima propraten seter.
  }

  set lastName(lastName){
    this._lastName = lastName;
  }

  sayHi (){
    return `Hi ${this.firstName} ${this.lastName} there`;
  }



} 

const person = new Person('Kurt', 'Cobain');
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
person.firstName = 'John';
person.lastName = 'Bon Jovi';
console.log('Full name of a new person is', person.firstName, person.lastName);




// object representation

// const person = { 
//   firstName: 'ajnhsd',
//   lastName: 'jasdas',
//   sayHi: function () {
//     return `Hi ${this.firstName} ${this.lastName} there`
//   }
// }
// console.log(person.firstName);




