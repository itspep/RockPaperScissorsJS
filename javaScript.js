pcChoice=function getComputerChoice(){
    let choice;
    let randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            choice="rock";
            break;
        case 2:
            choice="paper";
        case 3:
            choice="scissors";
            }
    return choice;
}
console.log(pcChoice());
