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
        return console.log("Rock");
    } else if (computerChoice === 2){
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}
getComputerChoice();

// Write the logic to get the human choice



function getHumanChoice() {
    let humanChoice = prompt("", "Rock, Paper, or Scissors");
    return console.log(humanChoice);
}
getHumanChoice();