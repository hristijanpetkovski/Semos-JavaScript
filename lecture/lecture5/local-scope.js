let message = 'Hello';

function sayHello (){
  message = 'Hello Changed by say Hello'
  let sayWorld = ' World'
  const concatWords = message.concat(sayWorld);
  console.log(concatWords);
}
console.log(message);
sayHello();
// console.log(message + sayWorld); Not defind!! Lokalna variabla

// _______________________________________________________

function greeting(){
  // local variable
  let sayWorld = 'Coders';
  console.log(message + ' ' + sayWorld);
  let greetMessage = '';
  if (sayWorld === 'Coders'){
    //Block-scoped variable
    let helloMessage = 'Hello'
    greetMessage = `${message} ${sayWorld} ${helloMessage}`;
    console.log(greetMessage);
  }
  greetMessage = `${message} ${sayWorld} ${helloMessage}`;
    console.log(greetMessage);
}

greeting();


 
