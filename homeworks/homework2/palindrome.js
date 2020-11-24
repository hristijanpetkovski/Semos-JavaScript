let array = [
  'македонија',
  'дај ми една чаша полна со вино',
  'анаволимилована',
  'радар',
  'кајак',
  'калабалак',
  'нели не си ти сенилен',
  'јадење и пиење дај',
  'слушател',
  'фудбал',
  'музика',
];

function getPalindrom(wordOfSentence) {

  let newArray = []; // Novo Array kade kje i smetam site palindromovi
  let normalWords = [];
    for (let i = 0; i < wordOfSentence.length; i++) { // mi gi vrti site indeksi
      let word = wordOfSentence[i].split(' ').join(''); // posebna variabla za trganje na praznoto mesto
      if (word == word.split('').reverse().join('')) { // uslov koj sporeduva za da najde koj e palindrom 
          newArray.push(wordOfSentence[i]); // dobienite palindromi se prefrlaat vo prazniot array newArray
      }else{
        normalWords.push(wordOfSentence[i]);
      }
    }
    
    return console.log('newArray with Palindrome', newArray ,'Normal words', normalWords); // pecatenje na newArray
  }
  getPalindrom(array);
  
      
    
        


      
  
  

          


// Function 2 with map

let newArray = []; // Imam pomoshno array kade gi zapishuvam site sto se palingromi
let normalWords = [];
const isPalindrome = (word) => {
  word = word.split(' ').join('');
  return word == word.split('').reverse().join('') ? true : false; //uslov vo koj sporeduva word.split.join so word.split.reverse.join 
}; // dokolku vrati true gi nosi vo noviot array dokolku vrati false ne gi pecati!
array.map((item) => isPalindrome(item) && newArray.push(item)); // Dvete strani mora da bidat true za uslovot da pomine!
//array.map(item)- go mapira arrayto od gore!!!         dokolku e palindrom && prefli mi go vo newArray                              
//array.map(item) - mi go dava sekoj element od arrayto!

array.map((item) => !isPalindrome(item) && normalWords.push(item));
console.log('Normal words', normalWords);
console.log('newArray with Palindeome', newArray);//precatenje na noviot array newArray