function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    console.log(ranNum);
    if (ranNum == 0) {
        return "Rock";
    }
    else if (ranNum == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let com = computerSelection.toLowerCase();
    if (player === com){
        return `You Tie! Both chose ${computerSelection}`;
    }
    //No Tie  | User chose Rock
    else if (player === "rock") {
        if (com === "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (player === "paper") {
        if (com === "rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lose! Scissors beat Paper";
        }
    }
    else {
        if (com === "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else {
            return "You Win! Scissors beat Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}

console.log(playRound("Scissors", getComputerChoice()));