const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

let userChoice;

const possibleChoises = document.querySelectorAll("button");

possibleChoises.forEach((possibleChoises) =>
  possibleChoises.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
  })
);
