// Step-1: git project set up.

// Step-2: logic to get the computer choice

const arr = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return arr[choice];
}

// Step-3: declaring global variables to keep track of human score and computer score.

let humanScore = 0;
let computerScore = 0;

// Step-4: grabbing all dom elements to update UI.
const ul = document.querySelector("ul");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");

// Step-5: logic for the game

function playRound(humanChoice, computerChoice) {
  const li = document.createElement("li");
  let content = `Your choice ${humanChoice} and Computer choice ${computerChoice}. `;

  if (humanChoice == computerChoice) {
    li.textContent = content + "It's a Tie";
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      li.textContent = content + "You won";
      human.textContent = `${humanScore}`;
    } else {
      computerScore++;
      li.textContent = content + "Computer won";
      computer.textContent = `${computerScore}`;
    }
  } else if (humanChoice == "rock") {
    if (computerChoice == "scissor") {
      humanScore++;
      li.textContent = content + "You won";
      human.textContent = `${humanScore}`;
    } else {
      computerScore++;
      li.textContent = content + "Computer won";
      computer.textContent = `${computerScore}`;
    }
  } else if (humanChoice == "scissor") {
    if (computerChoice == "paper") {
      humanScore++;
      li.textContent = content + "You won";
      human.textContent = `${humanScore}`;
    } else {
      computerScore++;
      li.textContent = content + "Computer won";
      computer.textContent = `${computerScore}`;
    }
  }
  ul.appendChild(li);
}

// logic to re-start the game.

const start = document.querySelector(".restart");

function restart() {
  const text = document.createTextNode("Want to play once again?");
  const btn = document.createElement("button");
  btn.textContent = "Yes";
  btn.classList.add("btn");
  btn.addEventListener("click", (e) => {
    buttons.forEach((b) => {
      b.disabled = false;
    });
    ul.innerHTML = "";
    humanScore = 0;
    computerScore = 0;
    human.textContent = 0;
    computer.textContent = 0;
    winner.textContent = "";
    start.textContent = "";
  });
  start.appendChild(text);
  start.appendChild(btn);
}

// logic to start the game
const buttons = document.querySelectorAll(".btn");
const winner = document.querySelector(".winner");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const humanSelection = e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (humanScore == 5) {
      winner.textContent = "Game finished, You are winner.";
      buttons.forEach((b) => {
        b.disabled = true;
      });
      restart();
      return;
    }
    if (computerScore == 5) {
      winner.textContent = "Game finished, Computer is winner.";
      buttons.forEach((b) => {
        b.disabled = true;
      });
      restart();
      return;
    }
  });
});
