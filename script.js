let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let number = Math.round(Math.random() * 120);
    let computerChoice = "";
    if (number <= 30){
        computerChoice = "rock";
    }else if(number <= 60){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    inputValid = false;
    do {
        let userChoice = prompt("Enter your choice between(rock, paper, scissors)");
        if ((userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper") || userChoice.toLowerCase() === "scissors"){
            inputValid = true;
            return userChoice;
        }else{
            alert("Invalid Choice...");
        }


    } while (inputValid === false);

}

function playRound(humanChoice,computerChoice){
    let roundWinner = "";
    console.log(`Player: ${humanChoice} || Computer: ${computerChoice}`);
    
    //Rock vs Paper
    if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("The winner is Player");
        roundWinner = "Player";
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("The winner is Computer");
        roundWinner = "Computer";
    }
    
    //Rock vs Scissors
    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("The winner is Player");
        roundWinner = "Player";
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("The winner is Computer");
        roundWinner = "Computer";
    }

    //Paper vs Scissors
    if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("The winner is Player");
        roundWinner = "Player";
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("The winner is Computer");
        roundWinner = "Computer";
    }
    
    
    if(roundWinner === "Player"){
        humanScore = humanScore +  1;
    }else if(roundWinner === "Computer"){
        computerScore = computerScore + 1;
    }else{
        console.log("TIE!!!");
    }

    displayScore();
    
}

function displayScore(){
    console.log(`Player: ${humanScore} Computer: ${computerScore}`);
}


for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);    
}
