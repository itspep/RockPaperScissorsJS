/*let userCount=0;
let pcCount=0;
pcChoice=function getComputerChoice(){
    let choice;
    let randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            choice="rock";
            break;
        case 2:
            choice="paper";
            break;
        case 3:
            choice="scissors";
            }
    return choice.toLowerCase();
}
console.log(pcChoice());
//generating user choice
userChoice= function getUserChoice(){
    let choice=prompt("Pick a choice: Rock, Paper or Scissors: ");
    return choice.toLowerCase();
}
console.log(userChoice());

//compare the user choice with the pc choice to play a round of the game
function playRound(pcChoice,userChoice){
    if (pcChoice==="rock" && userChoice==="rock"){
    console.log("it is a tie, we both picked rock");
    }
    else if (pcChoice==="rock" && userChoice==="paper"){
    console.log("you won, I picked rock and you picked paper");
    userCount++;
    }
    else if (pcChoice==="rock" && userChoice==="scissors"){
        console.log("I won, you picked scissors and I picked rock");
        pcCount++;
    }
    else if (pcChoice==="paper" && userChoice==="scissors"){
        console.log("you won, you picked scissors and I picked paper");
        userCount++;
    }
    else if (pcChoice==="scissors" && userChoice==="scissors"){
        console.log("It is a tie, we both picked scissors");
    }
    else if (pcChoice==="paper" && userChoice==="rock"){
        console.log("I won, you picked rock and I picked paper");
        pcCount++;
    }
    else if (pcChoice==="paper" && userChoice==="paper"){
        console.log("it is a tie, we both picked paper");
    }
    else if (pcChoice==="scissors" && userChoice==="paper"){
        console.log("I won, you picked paper and I picked scissors");
        pcCount++;
    }
    else if (pcChoice==="scissors" && userChoice==="rock"){
        console.log("you won, you picked rock and I picked scissors");
        userCount++;
    }    
}
function Game(userCount, pcCount){
    for(let i=0; i<5; i++){
        let pc=pcChoice();
        let user=userChoice();
        playRound(pc, user);
    }
    console.log("you got "+userCount+" points in total of five games");
    console.log("I got "+pcCount+" points in total of five games");
    if (userCount>pcCount){
        console.log("Congratulations, you won!");
    }
    else console.log("you lost!");
}

*/


let userCount = 0;
let pcCount = 0;

// generate computer choice
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// generate user choice
function getUserChoice() {
    let choice = prompt("Pick a choice: Rock, Paper or Scissors: ");
    return choice.toLowerCase();
}

// compare the user choice with the pc choice to play a round of the game
function playRound(pcChoice, userChoice, userCount, pcCount) {
    if (pcChoice === userChoice) {
        console.log("It's a tie, we both picked " + pcChoice);
    } else if (pcChoice === "rock" && userChoice === "paper") {
        console.log("You won, I picked rock and you picked paper");
        userCount++;
    } else if (pcChoice === "rock" && userChoice === "scissors") {
        console.log("I won, you picked scissors and I picked rock");
        pcCount++;
    } else if (pcChoice === "paper" && userChoice === "scissors") {
        console.log("You won, you picked scissors and I picked paper");
        userCount++;
    } else if (pcChoice === "paper" && userChoice === "rock") {
        console.log("I won, you picked rock and I picked paper");
        pcCount++;
    } else if (pcChoice === "scissors" && userChoice === "rock") {
        console.log("You won, you picked rock and I picked scissors");
        userCount++;
    } else if (pcChoice === "scissors" && userChoice === "paper") {
        console.log("I won, you picked paper and I picked scissors");
        pcCount++;
    }
    return [userCount, pcCount];
}

// play the game
function Game() {
    for (let i = 0; i < 5; i++) {
        let pc = getComputerChoice();
        let user = getUserChoice();
        [userCount, pcCount] = playRound(pc, user, userCount, pcCount);
    }

    console.log("You got " + userCount + " points in total of five games");
    console.log("I got " + pcCount + " points in total of five games");
    if (userCount > pcCount) {
        console.log("Congratulations, you won!");
    } else {
        console.log("You lost!");
    }
}

Game();


