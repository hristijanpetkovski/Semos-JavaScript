const thawChicken = minute =>{
  console.log('Chicken is being thawed...');

  return new Promise((resolve, reject) => {
    let isSomethingWrong = false;

    setTimeout(() => {
      if(!isSomethingWrong){
        resolve('Thawed chicked');
      }else{
        reject(new Error('Somting wrong happended!'));
      }



    }, minute * 1000); // 3 * 1000 = 3000
  });
}

// First solution

thawChicken(10 /* minutes */).then(
  chicken => console.log(`What we have after waiting? - ${chicken} `),
  error => console.log(`Error message ${error.message}`)
);

// Second solution
const onFulFilled = (message) => {
  console.log(`What we have after waiting? - ${message} `)
}

const onRejected = (error) => {
  console.log(`Error message ${error.message}`)
}

thawChicken(1).then(onFulFilled).catch(onRejected);


