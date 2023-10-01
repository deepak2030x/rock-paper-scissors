const arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return arr[choice];
}

function game() {
  let playerCount = 0;
  let computerCount = 0;
  function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === arr[2]) {
      if (computerSelection === arr[1]) {
        playerCount++;
        console.log("you won, scissors beat paper");
      } else if (computerSelection === arr[0]) {
        computerCount++;
        console.log("you lost, rock beats scissors");
      } else {
        console.log("tie");
      }
      return;
    }
    if (playerSelection === arr[1]) {
      if (computerSelection === arr[0]) {
        playerCount++;
        console.log("you won, paper beat rock");
      } else if (computerSelection === arr[2]) {
        computerCount++;
        console.log("you lost, scissors beats rock");
      } else {
        console.log("tie");
      }
      return;
    }
    if (playerSelection === arr[0]) {
      if (computerSelection === arr[2]) {
        playerCount++;
        console.log("you won, rock beat scissors");
      } else if (computerSelection === arr[1]) {
        computerCount++;
        console.log("you lost, paper beats rock");
      } else {
        console.log("tie");
      }
      return;
    }
    computerCount++;
  }
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("enter a choice: ").toLowerCase();
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt("enter a choice: ").toLowerCase();
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("player count", playerCount);
    console.log("computer count", computerCount);
  }
  if (playerCount > computerCount) {
    return "You won";
  } else if (playerCount === computerCount) {
    return "tie";
  } else {
    return "computer won";
  }
}

console.log(game());
