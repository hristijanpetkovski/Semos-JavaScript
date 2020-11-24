let string = 'I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that , so I am working toward it right now';
  
function CountWord (text) {
  let wordsofSentence = text.split(' ');
  for ( i = 0; i < wordsofSentence.length; i++){
    // let word = wordsofSentence[i].replace(".", " " - 1).length; wordsofSentence[i].replace(",", " " - 1).length;// Site tocki se zamenuvaat so prazno mesto!
      const word = wordsofSentence[i].split('.').join('').split(',').join(' ').length;
    if (word % 2 == 0){// Uslov za baranje na paren broj
      let duplicate = 0; // nova variabla za prikazuvanje na povtorenite parni zborovi, i nivniot broj na povtoruvanje
      for (count = 0; count < wordsofSentence.length; count++){
        if (wordsofSentence[i] == wordsofSentence [count]){
          duplicate++;
        }
      }
      console.log(wordsofSentence[i] + ' Se povtrotuva ' + duplicate + ' pat/i');
    }
  }
}
CountWord(string);
    