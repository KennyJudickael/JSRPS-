const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;

const possibleChoises = document.querySelectorAll("button");

possibleChoises.forEach((possibleChoises) =>
  possibleChoises.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // on peut aussi utilsier possibleChoices.length
  //   console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Pierre";
  }
  if (randomNumber === 2) {
    computerChoice = "Papier";
  }
  if (randomNumber === 3) {
    computerChoice = "Ciseaux";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Egalité";
  }
  if (computerChoice === "Pierre" && userChoice === "Papier") {
    result = "Gagné";
  }
  if (computerChoice === "Pierre" && userChoice === "Ciseaux") {
    result = "Perdu";
  }
  if (computerChoice === "Papier" && userChoice === "Ciseaux") {
    result = "Gagné";
  }
  if (computerChoice === "Papier" && userChoice === "Pierre") {
    result = "Perdu";
  }
  if (computerChoice === "Ciseaux" && userChoice === "Pierre") {
    result = "Gagné";
  }
  if (computerChoice === "Ciseaux" && userChoice === "Papier") {
    result = "Perdu";
  }

  resultDisplay.innerHTML = result;
}
