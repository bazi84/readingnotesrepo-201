'userstrict';

let userName= prompt(' What is your name?');
console.log(' the users name is ', userName);
let alertReturn= alert('Greetings, thanks for visiting my webpage ' + userName);

let guessingGameOrig =prompt('Do you think I had coding experience prior?');
console.log(guessingGameOrig);

let guessingGame = guessingGameOrig.toLocaleLowerCase();
console.log(guessingGameOrig);

if(guessingGameOrig==='yes' || guessingGameOrig === 'y'){
  alert('wrong!! I have never had any coding experience before');
}else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
  alert('you are correct!!');
}
guessingGameOrig =prompt('Do you think I graduated from college');
console.log(guessingGameOrig);
if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
  alert('wrong!! I was not able to complete my college degree');
}else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
  alert('you are correct!!');
}  
guessingGameOrig =prompt('Do you think I will continue in my pursuit of becoming a software developer');
console.log(guessingGameOrig);
if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
  alert('you are Correct!! I will continue in my pursuit');
}else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
  alert('wrong!! I will continue learning until I become a software developer');
}

guessingGameOrig =prompt('Do you think I have worked in a technical job before');
console.log(guessingGameOrig);
if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
  alert('you are Correct!!');
}else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
  alert('wrong!! I did work as computer tech before');
}

guessingGameOrig =prompt('Do you think English is my native language');
console.log(guessingGameOrig);
if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
  alert('wrong!! English is not my native language');
}else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
  alert('you are correct!! English is my second language');
}

alert('Thank you for answering my questions ' + userName + ', looking forward to getting to know you as well!!');