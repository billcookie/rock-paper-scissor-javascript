
//computer rock, paper, scissor selection

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let randomSelection = rps[Math.floor(Math.random() * rps.length)];
    return randomSelection;
}

// Round play and rules for rps!
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Oh no it looks like a tie!";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats scissors!";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You lose! Paper beats rock";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats paper";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "You lose! Rock beats scissors";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win! Paper beats rock!";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "You lose! Scissor beats paper";
    }
};

//output 
let computerSelection = computerPlay();
let playerSelection = prompt("Choose your weapon!");

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

