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
        return `It's a tie!`;
    } else if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return `You entered "${playerSelection}". Please enter Rock, Paper, or Scissors.`;
    } else {
        computerScore++;
        return 'You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + 
        ' beats ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + '.';
    }

}

function scores() {
    console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}`);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function gameEnd() {
    if (playerScore > computerScore) {
        return `You won the game. Final score is You: ${playerScore}. Computer: ${computerScore}.`;
    }
    else if (computerScore > playerScore) {
        return `You lost the game. Final score is Computer: ${computerScore}. You: ${playerScore}.`;
    }
    else {
        return `No winner. The game is a tie! Final score is You: ${playerScore}. Computer: ${computerScore}`;
    }
}

function game() {
    console.log(playRound(prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();
    console.log(playRound(prompt('Rock, Paper, or Scissors?').toLowerCase(), computerSelection));
    scores();

    console.log( gameEnd() );
    resetScore();
}

game();
game();
game();