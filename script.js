console.log(game());

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

  if (num == 1) {
    return "rock"
  } else if (num == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock"
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock"
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper"
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper"
  } else {
    return "Draw!"
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let counter = 0;
  let playerSelection = prompt("Rock, Paper, or Scissors?", "");
  let computerSelection = getComputerChoice();

  if (playRound(playerSelection, computerSelection).slice(4, 5) == "W") {
    playerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else if (playRound(playerSelection, computerSelection).slice(4, 5) == "L") {
    computerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else {
    console.log(playRound(playerSelection, computerSelection));
  }
  counter += 1

  playerSelection = prompt("Rock, Paper, or Scissors?", "");
  computerSelection = getComputerChoice();
  if (playRound(playerSelection, computerSelection).slice(4, 5) == "W") {
    playerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else if (playRound(playerSelection, computerSelection).slice(4, 5) == "L") {
    computerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else {
    console.log(playRound(playerSelection, computerSelection));
  }
  counter += 1

  playerSelection = prompt("Rock, Paper, or Scissors?", "");
  computerSelection = getComputerChoice();
  if (playRound(playerSelection, computerSelection).slice(4, 5) == "W") {
    playerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else if (playRound(playerSelection, computerSelection).slice(4, 5) == "L") {
    computerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else {
    console.log(playRound(playerSelection, computerSelection));
  }
  counter += 1

  playerSelection = prompt("Rock, Paper, or Scissors?", "");
  computerSelection = getComputerChoice();
  if (playRound(playerSelection, computerSelection).slice(4, 5) == "W") {
    playerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else if (playRound(playerSelection, computerSelection).slice(4, 5) == "L") {
    computerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else {
    console.log(playRound(playerSelection, computerSelection));
  }
  counter += 1

  playerSelection = prompt("Rock, Paper, or Scissors?", "");
  computerSelection = getComputerChoice();
  if (playRound(playerSelection, computerSelection).slice(4, 5) == "W") {
    playerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else if (playRound(playerSelection, computerSelection).slice(4, 5) == "L") {
    computerScore += 1;
    console.log(playRound(playerSelection, computerSelection));
  } else {
    console.log(playRound(playerSelection, computerSelection));
  }
  counter += 1

  if (playerScore > computerScore) {
    console.log("Congratulations! You Win!");
    console.log(`Your score: ${playerScore}`);
    console.log(`CPU score: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log("Too bad! You Lose!");
    console.log(`Your score: ${playerScore}`);
    console.log(`CPU score: ${computerScore}`);
  } else {
    console.log("It's a Draw! No one wins, but no one lost!");
    console.log(`Your score: ${playerScore}`);
    console.log(`CPU score: ${computerScore}`);
  }
}