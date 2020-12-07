const nextChristmas = () =>{
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  
  const date1 = new Date (today);
  const date2 = new Date('01/07/2021');
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
  return console.log(diffDays + " days");
}
nextChristmas();
  


