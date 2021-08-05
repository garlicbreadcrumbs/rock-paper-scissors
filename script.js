function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    let pSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerPlay();
    console.log(computerSelection);

    let result;
    if (pSelection === 'Rock' && computerSelection === 'Scissors') {
        result = 'You Win! Rock beats Scissors';
    } else if (pSelection === 'Paper' && computerSelection === 'Rock') {
        result = 'You Win! Paper beats Rock';
    } else if (pSelection === 'Scissors' && computerSelection === 'Paper') {
        result = 'You Win! Scissors beats Paper';
    } else if (pSelection === computerSelection) {
        result = 'It\'s a tie!';
    } else {
        result = 'You Lose! ' + computerSelection + ' beats ' + pSelection;
    }
    return result;
}

alert( playRound() );