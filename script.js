
// Write the logic to get the computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return computerChoice = "rock";
    } else if (computerChoice === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

// Write the logic to get the human choice
// function getHumanChoice() {
//     let humanChoice = prompt("", "rock, paper, or scissors").toLowerCase();
//     return humanChoice;
// }

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultMessage = document.querySelector("#message")

rockBtn.addEventListener("click", () => {
    let humanChoice = "rock";
    return playRound(humanChoice, getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    let humanChoice = "paper";
    return playRound(humanChoice, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    let humanChoice = "scissors";
    return playRound(humanChoice, getComputerChoice());
});


// Declare the players score 
let humanScore = 0;
let computerScore = 0;


    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            resultMessage.textContent = "";
            return resultMessage.textContent = "You lose! Computer Played: " + computerChoice + ". Paper wraps Rock. ";
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            resultMessage.textContent = "";
            return resultMessage.textContent = "You win!, Paper wraps Rock. Computer Played: " + computerChoice;
        }
        if (humanChoice === "rock" && computerChoice === "rock") {
            resultMessage.textContent = "";
            return resultMessage.textContent = "It is a draw. Computer Played: " + computerChoice;
        }
        if (humanChoice === "paper" && computerChoice === "paper") {
            resultMessage.textContent = "";
            return resultMessage.textContent = "It is a draw. Computer Played: " + computerChoice;
        }
        if (humanChoice === "scissors" && computerChoice === "scissors") {
            resultMessage.textContent = "";
            return resultMessage.textContent = "It is a draw. Computer Played: " + computerChoice;
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            resultMessage.textContent = "";
            return resultMessage.textContent = "You Lose, Rock crushes Scisors. Computer Played: " + computerChoice;
        }
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            resultMessage.textContent = "";
            return resultMessage.textContent = "You win!, Rock crushes Scisors. Computer Played: " + computerChoice;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            resultMessage.textContent = "";
            return resultMessage.textContent = "You win!, Scissors tears Paper. Computer Played: " + computerChoice;
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            resultMessage.textContent = "";
            return resultMessage.textContent = "You lose!, Scissors tears Paper. Computer Played: " + computerChoice;
        }
    }

// // Write the logic to play the entire game
// function playGame() {

//     // Write the logic to play a single round
//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice === "rock" && computerChoice === "paper") {
//             computerScore++;
//             return console.log("You lose! Computer Played: " + computerChoice + ". Paper wraps Rock. ");
//         }
//         if (humanChoice === "paper" && computerChoice === "rock") {
//             humanScore++;
//             return console.log("You win!, Paper wraps Rock. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "rock" && computerChoice === "rock") {
//             return console.log("It is a draw. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "paper" && computerChoice === "paper") {
//             return console.log("It is a draw. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "scissors" && computerChoice === "scissors") {
//             return console.log("It is a draw. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "scissors" && computerChoice === "rock") {
//             computerScore++;
//             return console.log("You Lose, Rock crushes Scisors. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "rock" && computerChoice === "scissors") {
//             humanScore++;
//             return console.log("You win!, Rock crushes Scisors. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "scissors" && computerChoice === "paper") {
//             humanScore++;
//             return console.log("You win!, Scissors tears Paper. Computer Played: " + computerChoice);
//         }
//         if (humanChoice === "paper" && computerChoice === "scissors") {
//             computerScore++;
//             return console.log("You lose!, Scissors tears Paper. Computer Played: " + computerChoice);
//         }
//     }

//     return playRound(getHumanChoice(), getComputerChoice());

// }


// for (let i = 1; i <= 5; i++) {
//     playGame();
// }

// if (humanScore > computerScore) {
//     console.log("##### AFTER 5 ROUNDS #####")
//     console.log("YOU WON!");
//     console.log("Your score is: " + humanScore + ", Computer score is: " + computerScore);
// } else if (humanScore < computerScore) {
//     console.log("##### AFTER 5 ROUNDS #####")
//     console.log("YOU LOST!");
//     console.log("Your score is: " + humanScore + ", Computer score is: " + computerScore);
// } else {
//     console.log("##### AFTER 5 ROUNDS #####")
//     console.log("IT'S DRAW");
//     console.log("Your score is: " + humanScore + ", Computer score is: " + computerScore);
// }