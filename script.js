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