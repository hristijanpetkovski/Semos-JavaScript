const phoneNumbers = [
  '070/556/996',
  '075/859/698',
  '076/665/985',
  '072/665/758',
  '078/958/632',
  '071/258/695',
  '070/958/695',
  '072/080/958',
  '071/525/256',
  '077/569/857'
]
function findTelekomNumber (phoneNumber){
  let newArray = []
  let telekomPrefix = ['070' , '071', '072'];
  for ( let i = 0; i < phoneNumber.length; i++){
    for (let c = 0; c < telekomPrefix.length; c++){
      if (phoneNumber[i].slice(0, 3)  == telekomPrefix[c]){
        newArray.push(phoneNumber[i])
      } 
    }
  } 
  return  console.log(newArray);
}
findTelekomNumber(phoneNumbers);
  
  


    

