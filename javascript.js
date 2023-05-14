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

function playRound(e) {
    let player = e.target.id;
    computerSelection = getComputerChoice();
    let com = computerSelection.toLowerCase();
    if (player === com){
        results.textContent = `You Tie! Both chose ${computerSelection}`;
    }
    //No Tie  | User chose Rock
    else if (player === "rock") {
        if (com === "paper") {
            results.textContent = "You Lose! Paper beats Rock";
             comPoints++;
        }
        else {
            results.textContent = "You Win! Rock beats Scissors";
            playerPoints++;
        }
    }
    else if (player === "paper") {
        if (com === "rock") {
            results.textContent = "You Win! Paper beats Rock";
            playerPoints++;
        }
        else {
            results.textContent = "You Lose! Scissors beat Paper";
            comPoints++;
        }
    }
    else {
        if (com === "rock") {
            results.textContent = "You Lose! Rock beats Scissors";
            comPoints++;
        }
        else {
            results.textContent = "You Win! Scissors beat Paper";
            playerPoints++;
        }
    }

    
    if (comPoints === 5){
        results.textContent = `Computer wins ${comPoints} - ${playerPoints}. Select a button to restart the game.`;
        comPoints = 0;
        playerPoints = 0;
    }
    else if (playerPoints === 5) {
        results.textContent = `You win ${playerPoints} - ${comPoints}. Select a button to restart the game.`;
        comPoints = 0;
        playerPoints = 0;
    }
    else {
        results.textContent += `. Player ${playerPoints} - ${comPoints} Computer`;
    }

}

function test(e) {
    console.log(typeof e.target.id);
}

let playerPoints = 0;
let comPoints = 0;

let a;
const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
a = buttons.forEach(button => button.addEventListener('click', playRound));