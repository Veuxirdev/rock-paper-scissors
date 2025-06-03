// Create values used in the game
let humanScore = 0;
let computerScore = 0;

// Do computerChoice function

function getComputerChoice(){

    // Create a value that returns a number between 1 and 3

    const randomVal = Math.floor(Math.random() * 3) + 1;

    // if randomVal is 1 return paper, if 2 return Scissors, if 3 return Rock
 
    if(randomVal === 1){
        return "Paper";
    } else if (randomVal === 2){
        return "Scissors";
    } else if (randomVal ===  3){
        return "Rock";
    } 

    // in one line
 
    /*     
    return randomVal === 1? paperVal : randomVal === 2? scissorsVal : randomVal === 3? rockVal : console.error("no value");
     */


    // with switch

/* 
    switch (randomVal) {
        case 1:
            return paperVal;
    
        case 2:
            return scissorsVal;
        
        case 3:
            return rockVal;
        
        default:
            break;
    }
     */
}

// Do human choice function

function getHumanChoice(){

    // Make a variable for the choice of the user using a prompt (Case-insensitive)

    let humanVal = prompt("Chose One: Rock, Paper or Scissors.").toLowerCase();
    humanVal = humanVal.replace(humanVal[0],humanVal[0].toUpperCase());
    return humanVal;

}
// Make the game logic

function playRound(humanChoice, computerChoice){
    // Compare the choice of the human and the computer and return the current score for both

    if(humanChoice === computerChoice){
        console.log("Draw");
        return `Computer: ${computerScore}. Human:${humanScore}.`
    } else if(
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Rock" && computerChoice === "Scissors")
        ){
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
            return `Computer: ${computerScore}. Human:${humanScore}.`
    } else {
            computerScore++
            console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
            return `Computer: ${computerScore}. Human:${humanScore}.`
    }
}

//Make 5 rounds
setTimeout(() => {
    for(let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
}

// Final score
    if(humanScore > computerScore){
        console.log("You Win The Game!");
    } else if(computerScore > humanScore){
        console.log("You lose The Game!");
    } else {
        console.log("The Game Ends in Draw");
    }

}, 1000);

