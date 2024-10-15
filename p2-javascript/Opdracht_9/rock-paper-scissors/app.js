const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computer;
let player;
let result;
possibleChoices.forEach(button => button.addEventListener("click", (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computer = "rock";
    }
    else if(randomNumber == 2) {
        computer = "paper";
    }
    else if(randomNumber == 3) {
        computer = "scissors";
    }
    computerChoice.innerHTML = computer;
}
function getResult() {
    if (computer == player) {
        result = "gelijkspel";
    }
    else if (computer == "rock" && player == "paper") {
        result = "je hebt gewonnen!";
    }
    else if (computer == "rock" && player == "scissors") {
        result = "je hebt verloren!";
    }
    else if (computer == "paper" && player == "scissors") {
        result = "je hebt gewonnen!";
    }
    else if (computer == "paper" && player == "rock") {
        result = "je hebt verloren!";
    }
    else if (computer == "scissors" && player == "rock") {
        result = "je hebt gewonnen!";
    }
    else if (computer == "scissors" && player == "paper") {
        result = "je hebt verloren!";
    }
    resultOutput.innerHTML = result;
}