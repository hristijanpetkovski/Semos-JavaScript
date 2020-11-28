//   PROMISE  
// new Promise (function(resolve, reject){

//})

// Them ALWAYS 

// Definiranje na Promise

const promiseToCleanTheRoom = new Promise(function(resolve, reject){

  // cleaning the romm

  let isCLean = false;// Bidejki ovde e false zatoa e is not clean!!!!

  if (isCLean){
    resolve('clean');
  }else{
    reject('not clean');
  }

});


const onResolver = function(fromResolve){
  console.log(`the room is ${fromResolve}`);
};

const onRejector = function(fromReject){
  console.log(`the room is ${fromReject}`)
};
promiseToCleanTheRoom.then(onResolver).catch(onRejector);