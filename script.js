// Step-1: git project set up.

// Step-2: logic to get the computer choice

const arr = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return arr[choice];
}

// Step-3: logic to get the human choice

function getHumanChoice() {
  let choice = prompt("Enter your choice? Rock, Paper, Scissor")
    ?.toLowerCase()
    .trim();
  while (choice == undefined || choice == "") {
    choice = prompt("Enter your choice? Rock, Paper, Scissor")
      ?.toLowerCase()
      .trim();
  }
  if (choice == "rock" || choice == "paper" || choice == "scissor") {
    return choice;
  } else {
    return getHumanChoice();
  }
}

// console.log(getHumanChoice());

// Step-6: logic to play entire game

function playGame() {
  // Step-4: declaring local variables to keep track of human score and computer score.

  let humanScore = 0,
    computerScore = 0;

  // Step-5: logic to play a single round

  function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == computerChoice) {
      console.log("Tie");
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        humanScore++;
        console.log("You won, paper beats rock.");
      } else {
        computerScore++;
        console.log("Computer won, scissor beats paper");
      }
    } else if (humanChoice == "rock") {
      if (computerChoice == "scissor") {
        humanScore++;
        console.log("You won, rock beats scissor.");
      } else {
        computerScore++;
        console.log("Computer won, paper beats rock");
      }
    } else if (humanChoice == "scissor") {
      if (computerChoice == "paper") {
        humanScore++;
        console.log("You won, scissor beats paper.");
      } else {
        computerScore++;
        console.log("Computer won, rock beats scissor");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore == computerScore) {
    console.log("Tie");
  } else if (humanScore > computerScore) {
    console.log("Final winner you.");
  } else {
    console.log("Final winner Computer.");
  }
}

// play the game.

playGame();
