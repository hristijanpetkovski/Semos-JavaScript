const arrayOne = [1, 2, 3, 4];
const arrayTwo = [1,2,5]

 const checkSimilarity = (array1,array2) => {
   const sameElements = [];
   for(let i=0; i<array1.length;i++){
     for(let j=0;j<array2.length;j++) {
       if(array1[i] === array2[j]) {
         sameElements.push(array1[i]);
       }
     }
   }
   return console.log(sameElements);
 }
 checkSimilarity(arrayOne, arrayTwo);

  
  

 

