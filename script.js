function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let playerScore = 0;
let computerScore = 0;
computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper.';
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return 'Please enter Rock, Paper, or Scissors.';
    } else {
        computerScore++;
        return 'You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + 
        ' beats ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + '.';
    }

}

function scores() {
    console.log(`Your score is: ${playerScore}. Computer's score is: ${computerScore}`);
}

function game() {
    console.log(playRound(playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(playerSelection  = prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(playerSelection  = prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(playerSelection  = prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(playerSelection  = prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
}

game();