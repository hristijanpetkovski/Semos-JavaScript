let csv = 'a,b\nc,d';
  const ConvertArray = (text) => {
  let newArray = [];
  let convertedArray = text.split("\n");
  for(let i=0; i < convertedArray.length; i++){
    let cells = convertedArray[i].split(",");
    newArray.push(cells);
  }
  return console.log(newArray);
  }
  ConvertArray(csv);

  



