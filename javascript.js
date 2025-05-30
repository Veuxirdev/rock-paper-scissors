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

    const humanVal = prompt("Select: Paper, Scissors, Rock. Make sure to uppercase the first letter").toLowerCase();
    return humanVal.replace(humanVal[0],humanVal[0].toUpperCase());

}
getHumanChoice();
// Make the game logic

function playRound(humanChoice, computerChoice){
    //
}