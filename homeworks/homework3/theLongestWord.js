const  array =[ 
  'Zdravo',
  'Dobar',
  'Zelen',
  'crvenkapa',
  'Crveni',
  'Istoriski',
  'Kosmonaut',
];

  const theLongestWord = (text) => {

    let longestWord = '';
    for (let i = 0; i < text.length; i++){
      if (longestWord.length < text[i].length){
       longestWord = text[i];
      }
    }
    return  console.log(longestWord);
  }
  theLongestWord(array);



