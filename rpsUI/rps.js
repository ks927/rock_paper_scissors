const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const score = document.querySelector('.score');
const resultMessage = document.querySelector('.resultMessage');
const compChoice = document.querySelector('.compChoice');

let userWins = 0;
let compWins = 0;

function game(e){
  resultWin = 'You won best out of 5!';
  resultLoss = 'You lost best out of 5 :(';
  turns = 0;
    
  if(e.target.className == 'rock') {
        rockPaperScissors('rock');
        console.log(e.target.className);
    } else if(e.target.className == 'paper'){
        rockPaperScissors('paper');
    } else if(e.target.className == 'scissors') {
        rockPaperScissors('scissors');
    }
    score.innerHTML = `user wins: ${userWins} computer wins: ${compWins}`
    turns += 1;
  }
  /*
  while(userWins <= 3 || compWins <= 3) {
    if(userWins == 3) {
      resultMessage.innerHTML = resultWin;
      break;
    } else if (compWins == 3) {
      resultMessage.innerHTML = resultLoss;
      break;
    }
    */


function rockPaperScissors(input) {
  const userGuess = input.toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  let compGuess = choices[Math.floor(Math.random() * 3)];

  compChoice.innerHTML = compGuess;
  compareGuess(userGuess, compGuess);
}

function compareGuess(userGuess, compGuess) {
  let winMessage = `You win! ${userGuess} beats ${compGuess}`;
  let loseMessage = `You lose! ${userGuess} loses to ${compGuess}`;
  
  if (userGuess == 'rock') {
    if (compGuess == 'paper') {
      console.log(loseMessage);
      score.innerText = loseMessage;
      compWins += 1;
    } else if (compGuess == 'rock') {
      console.log('Draw! play again!');
    } else {
      console.log(winMessage);
      score.innerText = winMessage;
      userWins += 1;
    }
  } else if (userGuess == 'paper') {
    if (compGuess == 'scissors') {
      console.log(loseMessage);
      score.innerText = loseMessage;
      compWins += 1;
    } else if (compGuess == 'paper') {
      console.log('Draw! play again!');
    } else {
      console.log(winMessage);
      score.innerText = winMessage;
      userWins += 1;
    }
  } else if (userGuess == 'scissors') {
    if (compGuess == 'rock') {
      console.log(loseMessage);
      score.innerText = loseMessage;
      compWins += 1;
    } else if (compGuess == 'scissors') {
      console.log('Draw! play again!');
    } else {
      console.log(winMessage);
      score.innerText = winMessage;
      userWins += 1;
    }
  } else {
    console.log('invalid input');
    alert('invalid. enter rock paper or scissors please');
  }
}

window.addEventListener('click', game);