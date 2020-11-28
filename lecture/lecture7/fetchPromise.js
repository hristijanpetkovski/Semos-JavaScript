// FETCH 

const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');// This make HTTP request!

// console.log(fetchPromise);

fetchPromise.then(response => {
  // console.log(response);
  return response.json();
}).then(people => {
  
  // Array.prototype.map();
  // Arrat.map();
  const names = people.map(person => person.name)
  
  const getNameGetter = people.filter(person => person.name.length >= 5 && person.name.length < 10)
  console.log(getNameGetter)
  
});


  // console.log(names);
  // const namesLength = names.filter(name => name.length > 5 && name.length < 10 )
  // console.log(namesLength);



// MAPPING

const number = [1, 2, 3, 4, 5];
const addTwo = number.map(number => 2 * number);
console.log(addTwo);

const greaterThanThree = number.filter(number => number > 3);
console.log(greaterThanThree);

