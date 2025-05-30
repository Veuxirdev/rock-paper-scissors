// Create values used in the game

const paperVal = "Paper";
const scissorsVal = "Scissors";
const rockVal = "Rock";

// Make computerChoice function

function computerChoice(){

    // Create a value that returns a number between 1 and 3

    const randomVal = Math.floor(Math.random() * 3) + 1;

    // if randomVal is 1 return paper, if 2 return Scissors, if 3 return Rock
 
    if(randomVal === 1){
        return paperVal;
    } else if (randomVal === 2){
        return scissorsVal;
    } else if (randomVal ===  3){
        return rockVal;
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

computerChoice();