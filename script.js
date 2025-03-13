// Declare the players score 

let humanScore = 0;
let computerScore = 0;



// Write the logic to get the computer choice

function getComputerChoice(){

    // let randomNumb = Math.random() * 3;
    // let computerChoice = Math.floor(randomNumb)
    // console.log("random number is " + randomNumb);
    // console.log("random number floored is " + computerChoice);

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1){
        return computerChoice = "rock";
    } else if (computerChoice === 2){
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}
//console.log(getComputerChoice());

// Write the logic to get the human choice



function getHumanChoice() {
    let humanChoice = prompt("", "rock, paper, or scissors").toLowerCase();
    return humanChoice;
}
//console.log(getHumanChoice());


// Write the logic to play a single round

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return ( 
            "You lose!, Paper beats Rock",
            console.log("Computer Played: " + computerChoice)
        );        
    } 
    if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return ("You win!, Paper beats Rock", 
        console.log("Computer Played: " + computerChoice)  );     
    } 
    if (humanChoice === "rock" && computerChoice === "rock"){
        return("It is a draw", 
        console.log("Computer Played: " + computerChoice) );     
    }
    if (humanChoice === "paper" && computerChoice === "paper"){
        return ("It is a draw", 
        console.log("Computer Played: " + computerChoice)  );     
    }
    if (humanChoice === "scissors" && computerChoice === "scissors"){
        return ("It is a draw" , 
        console.log("Computer Played: " + computerChoice)  );    
    }     
    if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return ("You Lose, Rock crushes Scisors", 
        console.log("Computer Played: " + computerChoice));     
    } 
    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return ("You win!, Rock crushes Scisors", 
        console.log("Computer Played: " + computerChoice) );   
    }
    if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return ("You win!, Scissors tears Paper", 
        console.log("Computer Played: " + computerChoice));
    }
    if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return ("You lose!, Scissors tears Paper", 
        console.log("Computer Played: " + computerChoice));
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));