function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
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
    
}

console.log(getComputerChoice());