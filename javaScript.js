let userCount=0;
let pcCount=0;
let pcChoice=function getComputerChoice(){
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
let userChoice= function getUserChoice(){
    let choice=prompt("Pick a choice: Rock, Paper or Scissors: ");
    return choice.toLowerCase();
}
console.log(userChoice());

//compare the user choice with the pc choice to play a round of the game
function playRound(pcChoice,userChoice, userCount, pcCount){
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
    return [userCount,pcCount];
}
function Game(userCount, pcCount){
    for(let i=0; i<5; i++){
        let pc=pcChoice();
        let user=userChoice();
       [userCount, pcCount]= playRound(pc, user, userCount, pcCount);
    }
    console.log("you got "+userCount+" points in total of five games");
    console.log("I got "+pcCount+" points in total of five games");
    if (pcCount>userCount){
        console.log("I won!");
    }
    else console.log("you won!");
}
Game(userCount, pcCount);