let userCount = 0;
let pcCount = 0;
let roundsPlayed = 0;

function pcChoice() {
  let choice;
  let randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice.toLowerCase();
}

let userChoice;
let outCome = document.getElementById("results");
let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    userChoice = buttons[i].innerText.toLowerCase();
    playRound(pcChoice(), userChoice);
  });
}

function playRound(pcChoice, userChoice) {
  if (roundsPlayed === 5) {
    if (userCount > pcCount) {
      outCome.innerText=" ";
      document.getElementById("total").innerText = "Congratulations!, you beat the AI Final score: AI - " + pcCount + " | Human - " + userCount;
    } else {
      outCome.innerText=" ";
      document.getElementById("total").innerText = "Humanity is doomed!" +
        " Final score: AI - " + pcCount + " | Human - " + userCount;
    }
  } else {
    roundsPlayed++;
    if (pcChoice === userChoice) {
      outCome.innerText = " ";
      outCome.innerText += "Round " + roundsPlayed + " It is a draw";
    } else if (
      (userChoice === "rock" && pcChoice === "scissors") ||
      (userChoice === "scissors" && pcChoice === "paper") ||
      (userChoice === "paper" && pcChoice === "rock")
    ) {
      outCome.innerText = " ";
      outCome.innerText += "Round " + roundsPlayed + " You won";
      userCount++;
      console.log(userCount);
    } else {
      outCome.innerText = " ";
      outCome.innerText += "Round " + roundsPlayed + " AI won";
      pcCount++;
      console.log(pcCount);
    }
  }
}
