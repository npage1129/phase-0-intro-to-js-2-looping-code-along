function  writeCards(names, event){
  let newArray = [];
for (let i = 0; i < names.length; i++){; 
    let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
   newArray.push(message);
}
return newArray;
}

function countDown(integer){
while(integer >= 0){
    console.log(integer);
    integer--;
}
}


