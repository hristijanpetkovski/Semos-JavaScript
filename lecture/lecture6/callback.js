// CallBack e eden od primerite za asihrono programiranje!!!!

const calc = function (x, y, type) {
  if ( type === 'add'){
  return x + y;
  }else if (type === "multiply") {
    return x * y;
  }
}; 
// console.log(calc(2, 3, 'add' ))
// console.log(calc(2, 3, 'multiply' ))

// Exemple with CALLBACK

const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = function (a, b){
  return a * b;
}

const caclWithCallback = (x, y, callback) =>{
  return callback(x, y);
}

console.log(caclWithCallback(3, 4, add));
console.log(caclWithCallback(3, 4, multiply));

// New Exemple

console.log('Hello');

setTimeout(() => {console.log('tick Hello')},1000);

console.log('Hey there');

setTimeout(() => {
  console.log('Tick with zero second')},0);



// New Function DELETE DUPLICATE

const removeDuplicate = (numberList) => {
 const numLength = numberList.length;
 let lastNumber = NaN;
 let count = 0;
 
 for (let i = 0; i < numLength; i++){
  if (numberList[i] !== lastNumber){
    numberList[count] = numberList[i];
    lastNumber = numberList[i]
    count++

  }
 }
  return count;
}

const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicate(nums1));

const nums2 = [1, 1, 2];
console.log(removeDuplicate(nums2));

// New exemple; New FUNCTION
// 'abacabaabacaba'

const firstUniqueChar = (string) => {
  for (let i = 0; i < string.length; i++){
    const char = string[i];
    // if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1){
    //   return char; 
    // }
    if(string.indexOf(string[i]) == string.lastIndexOf(string[i])){
      return string[i];
    }
  }
  return "there are no chars in this string that do not repeat ";
}

const string1 = 'abaKabad'
console.log(firstUniqueChar(string1));
const string2 = 'abacabaabacaba'
console.log(firstUniqueChar(string2));

// Homework make callback with previus function!


const checkDuplicates = (nums) => {
  const numLength = nums.length;
  let lastNumber = NaN;
  let count = 0;
  for (let i = 0; i < numLength; i++) {
    if (nums[i] !== lastNumber) {
      nums[count] = nums[i];
      lastNumber = nums[i];
      count++;
    }
  }
  return count;
}

const removeDuplicatesCallback = (numberList, callback) => {
  return callback(numberList);
}

const numberListThree = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7];
console.log(removeDuplicatesCallback(numberListThree, checkDuplicates));
