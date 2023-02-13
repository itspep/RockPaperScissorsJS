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
/*console.log(pcChoice());
//generating user choice
let userChoice= function getUserChoice(){
    let choice=prompt("Pick a choice: Rock, Paper or Scissors: ");
    return choice.toLowerCase();
}
console.log(userChoice());
*/
//select the input class to take user selection
let container=document.querySelector("input");
//define the preamble to prompt user choice
let preamble=document.querySelector("preamble");
//define the buttons
let btn1=document.createElement("button");
let btn2=document.createElement("button");
let btn3=document.createElement("button");
//define the buttons labels
btn1.textContent="Rock";
btn2.textContent="Paper";
btn3.textContent="Scissors";
//append the elements to the document
container.appendChild(preamble);
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
container.appendChild(preamble);
//defining the output elements
let output=document.querySelector("output");
let display=document.querySelector("p");
output.appendChild(display);
//define a user choice
let userChoice;
if(btn1.addEventListener("click", playRound)){userChoice="rock"}
else if(btn2.addEventListener("click", playRound)){userChoice="paper"}
else if(btn3.addEventListener("click,", playRound)){userChoice="scissors"}
//compare the user choice with the pc choice to play a round of the game
function playRound(pcChoice,userChoice, userCount, pcCount){
    if (pcChoice==="rock" && userChoice==="rock"){
    display.textContent="It is a draw";
    }
    else if (pcChoice==="rock" && userChoice==="paper"){
    display.textContent="you won, I picked rock and you picked paper";
    userCount++;
    }
    else if (pcChoice==="rock" && userChoice==="scissors"){
        display.textContent="I won, you picked scissors and I picked rock";
        pcCount++;
    }
    else if (pcChoice==="paper" && userChoice==="scissors"){
        display.textContent="you won, you picked scissors and I picked paper";
        userCount++;
    }
    else if (pcChoice==="scissors" && userChoice==="scissors"){
        display.textContent="It is a tie, we both picked scissors";
    }
    else if (pcChoice==="paper" && userChoice==="rock"){
        display.textContent="I won, you picked rock and I picked paper";
        pcCount++;
    }
    else if (pcChoice==="paper" && userChoice==="paper"){
        display.textContent="it is a tie, we both picked paper";
    }
    else if (pcChoice==="scissors" && userChoice==="paper"){
        display.textContent="I won, you picked paper and I picked scissors";
        pcCount++;
    }
    else if (pcChoice==="scissors" && userChoice==="rock"){
        display.textContent="you won, you picked rock and I picked scissors";
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


