// DOM queries
const bodyHTML = document.querySelector("body");
const paperBtn = document.createElement("button");
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");


// Create values used in the game
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

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

    const resultDiv = document.createElement("div");
    const roundResult = document.createElement("h1");
    bodyHTML.appendChild(resultDiv);

    if(humanChoice === computerChoice){
        drawScore++;
        resultDiv.textContent = `Draw. Computer: ${computerScore}. Player: ${humanScore}.`;
    } else if(
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Rock" && computerChoice === "Scissors")
        ){
            humanScore++;
            resultDiv.textContent = `You Win! ${humanChoice} beats ${computerChoice}. 
            Computer: ${computerScore}. Player: ${humanScore}.`;
    } else {
            computerScore++
            resultDiv.textContent = `You Lose ${computerChoice} beats ${humanChoice}.
            Computer: ${computerScore}. Player: ${humanScore}.`;
    }
    // Final score of 5 rounds

    if(computerScore + humanScore + drawScore === 5){
        if(humanScore > computerScore){
            computerScore = 0;
            humanScore = 0;
            drawScore = 0;
            roundResult.textContent = "You Win The Game!";
            bodyHTML.appendChild(roundResult);
        } else if(computerScore > humanScore){
            computerScore = 0;
            humanScore = 0;
            drawScore = 0;
            roundResult.textContent = "You lose The Game!";
            bodyHTML.appendChild(roundResult);
        } else {
            computerScore = 0;
            humanScore = 0;
            drawScore = 0;
            roundResult.textContent = "The Game Ends in Draw";
            bodyHTML.appendChild(roundResult);
        }
        
    }
}

paperBtn.textContent = "Paper";
rockBtn.textContent = "Rock";
scissorsBtn.textContent = "Scissors";

const gameButtons = [paperBtn,rockBtn,scissorsBtn];

gameButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(button.textContent, getComputerChoice())
    });
})


bodyHTML.appendChild(paperBtn);
bodyHTML.appendChild(rockBtn);
bodyHTML.appendChild(scissorsBtn);



