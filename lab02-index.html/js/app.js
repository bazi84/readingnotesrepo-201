'userstrict';
let questionsAnswered = 0;
let userName= prompt(' What is your name?');
console.log(' the users name is ', userName);
let alertReturn= alert('Greetings, thanks for visiting my webpage ' + userName);

function firstQuestion(){
  let guessingGameOrig =prompt('Do you think I had coding experience prior?');
  console.log(guessingGameOrig);
  
  let guessingGame = guessingGameOrig.toLocaleLowerCase();
  console.log(guessingGameOrig);
  
  if(guessingGameOrig==='yes' || guessingGameOrig === 'y'){
    alert('wrong!! I have never had any coding experience before');
  }else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
    alert('you are correct!!');
    questionsAnswered++
  }
}
firstQuestion()

function secondQuestion(){
  guessingGameOrig =prompt('Do you think I graduated from college');
  console.log(guessingGameOrig);
  if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
    alert('wrong!! I was not able to complete my college degree');
  }else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
    alert('you are correct!!');
    questionsAnswered++
  } 
}
secondQuestion()

function thirdQuestion(){
  guessingGameOrig =prompt('Do you think I will continue in my pursuit of becoming a software developer');
  console.log(guessingGameOrig);
  if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
    alert('you are Correct!! I will continue in my pursuit');
    questionsAnswered++
  }else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
    alert('wrong!! I will continue learning until I become a software developer');
  }
}
thirdQuestion()

function fourthQuestion(){
  guessingGameOrig =prompt('Do you think I have worked in a technical job before');
  console.log(guessingGameOrig);
  if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
    alert('you are Correct!!');
    questionsAnswered++
  }else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
    alert('wrong!! I did work as computer tech before');
  }
}
fourthQuestion()

function fifthQuestion(){
  guessingGameOrig =prompt('Do you think English is my native language');
  console.log(guessingGameOrig);
  if(guessingGameOrig ==='yes' || guessingGameOrig === 'y'){
    alert('wrong!! English is not my native language');
  }else if(guessingGameOrig === 'no' || guessingGameOrig === 'n'){
    alert('you are correct!! English is my second language');
    questionsAnswered++
  }
}
fifthQuestion()

function sixthQuestion(){
  let FavoriteColor= 'Green';
  let correctColor = "Green";
  let guessCount = 0;
  let guessLimit = 4; 
  let outOfGuesses = false
  let win = false;

  while(guessCount != 4 || win != true){
      let userAnswer = prompt('Please guess whats my favorite color?')
      if(userAnswer == correctColor){
          alert('Congratulation!! you guessed correct')
          questionsAnswered++
          win = true;
          break;
      } else {
          alert('incorrect. Please guess again')
          guessCount++
          if(guessCount == guessLimit)
          {alert('Nice try!!! correct answer is Green')
          break;}
      }
  }
}
sixthQuestion()

function seventhQuestion(){
  let favoriteMovies = ['The matrix', 'The lord of the rings the return of the king', 'host', 'gladiator', 'ip man', 'the bourne identity'];
  let correctAnswer = false;
    for(let i = 0; i<6; i++){
      console.log(correctAnswer)
      if(correctAnswer === true){
        break;
      }
      let userResponse = prompt('what are my favorite movies?');
      for(let j = 0; j<favoriteMovies.length -1; j++){
        if(userResponse === favoriteMovies[j]){
          questionsAnswered++
          console.log (questionsAnswered);
          alert('congratulations you got it!')
          alert('Thank you for going through my questionaire. You got ' + questionsAnswered +  ' questions correct')
          correctAnswer = true;
          break
        } 
        if(j === favoriteMovies.length -1 && !correctAnswer){
          alert('sorry you got it wrong, try again ')
        }
      }
      if(i === favoriteMovies.length -1 && !correctAnswer){
        alert('sorry!!! the correct answers were ' + favoriteMovies)
      }
  }
}
seventhQuestion()

