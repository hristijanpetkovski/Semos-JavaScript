// Resenieto od Ivana (moe podobro resenie ne najdov);

let string1 = 'j97va11599ri112116'

const  charAndAscii = function (charAndAsciiCombination) {
  const char = /[a-z]/;
  const array = [];
  for(let i=0;i<charAndAsciiCombination.length;i++){
    
    if(charAndAsciiCombination[i].match(char)) {
      let charToNumber = charAndAsciiCombination.charCodeAt(i);
      array.push(charToNumber);
    } else {
      const asciiToChar = charAndAsciiCombination[i] === '1' ? 3 : 2;    
      const addToArray = String.fromCharCode(
        Number(charAndAsciiCombination.substr(i, asciiToChar))
      );
      array.push(addToArray);
      i += asciiToChar - 1; 
    }
  } 
  return array.join('');
}
console.log(charAndAscii(string1));



  




  
  




