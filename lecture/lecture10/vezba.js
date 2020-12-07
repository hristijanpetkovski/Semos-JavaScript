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
