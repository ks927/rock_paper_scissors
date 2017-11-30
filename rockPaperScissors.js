let userWins = 0;
let compWins = 0;

function game(){
  resultWin = 'You won best out of 5!';
  resultLoss = 'You lost best out of 5 :(';
  turns = 0;
  
  while(userWins <= 3 || compWins <= 3) {
    if(userWins == 3) {
      alert(resultWin);
      break;
    } else if (compWins == 3) {
      alert(resultLoss);
      break;
    }
    const input = prompt('Rock, Paper, Scissors, shoot!', 'rock');
    rockPaperScissors(input);
    alert(`user wins: ${userWins} computer wins: ${compWins}`);
    turns += 1;
  }
}

function rockPaperScissors(input) {
  const userGuess = input.toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  let compGuess = choices[Math.floor(Math.random() * 3)];

  compareGuess(userGuess, compGuess);
}

function compareGuess(userGuess, compGuess) {
  let winMessage = `You win! ${userGuess} beats ${compGuess}`;
  let loseMessage = `You lose! ${userGuess} loses to ${compGuess}`;
  
  if (userGuess == 'rock') {
    if (compGuess == 'paper') {
      console.log(loseMessage);
      compWins += 1;
    } else if (compGuess == 'rock') {
      console.log('Draw! play again!');
    } else {
      console.log(winMessage);
      userWins += 1;
    }
  } else if (userGuess == 'paper') {
    if (compGuess == 'scissors') {
      console.log(loseMessage);
      compWins += 1;
    } else if (compGuess == 'paper') {
      console.log('Draw! play again!');
    } else {
      console.log(winMessage);
      userWins += 1;
    }
  } else if (userGuess == 'scissors') {
    if (compGuess == 'rock') {
      console.log(loseMessage);
      compWins += 1;
    } else if (compGuess == 'scissors') {
      console.log('Draw! play again!');
    } else {
      console.log(winMessage);
      userWins += 1;
    }
  } else {
    console.log('invalid input');
    alert('invalid. enter rock paper or scissors please');
  }
}

game();