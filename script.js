const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const roundResult = document.querySelector("#round-result");

const playerResult = document.querySelector("#player-result");
const cpuResult = document.querySelector("#cpu-result");
const winnerPrompt = document.querySelector("#winner-prompt");

let playerScore = 0;
let cpuScore = 0;

rock.addEventListener("click", () => {
  playerSelection = "rock";
  cpuSelection = getCpuChoice();
  playRound(playerSelection, cpuSelection);
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  cpuSelection = getCpuChoice();
  playRound(playerSelection, cpuSelection);
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  cpuSelection = getCpuChoice();
  playRound(playerSelection, cpuSelection);
});

function getCpuChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

  if (num == 1) {
    return "rock"
  } else if (num == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerSelection, cpuSelection) {
  if (playerSelection == "rock" && cpuSelection == "paper") {
    roundResult.textContent = "You Lose! Paper beats Rock";
    cpuScore++;
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  } else if (playerSelection == "rock" && cpuSelection == "scissors") {
    roundResult.textContent = "You Win! Rock beats Scissors";
    playerScore++;
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  } else if (playerSelection == "paper" && cpuSelection == "rock") {
    roundResult.textContent = "You Win! Paper beats Rock";
    playerScore++;
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  } else if (playerSelection == "paper" && cpuSelection == "scissors") {
    roundResult.textContent = "You Lose! Scissors beats Paper";
    cpuScore++;
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  } else if (playerSelection == "scissors" && cpuSelection == "rock") {
    roundResult.textContent = "You Lose! Rock beats Scissors";
    cpuScore++;
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  } else if (playerSelection == "scissors" && cpuSelection == "paper") {
    roundResult.textContent = "You Win! Scissors beats Paper";
    playerScore++;
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  } else {
    roundResult.textContent = "Draw!";
    playerResult.textContent = `Player: ${playerScore}`;
    cpuResult.textContent = `CPU: ${cpuScore}`;
  }

  winner();
}

function winner() {
  if (playerScore == 5 && playerScore > cpuScore) {
    winnerPrompt.textContent = "Congratulations! You've won!";
  } else if (cpuScore == 5 && cpuScore > playerScore) {
    winnerPrompt.textContent = "Too bad! You've lost.";
  }
}
