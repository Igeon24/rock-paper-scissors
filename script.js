let humanScore = 0;
let computerScore = 0;
let actualRound = 0;

function displayRound(){
    let roundDisplay = document.querySelector(".round-display");
    roundDisplay.textContent  = `Round: ${actualRound}`
}


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
    actualRound  = actualRound + 1;
    displayRound();
    let roundWinner = "";
    let text = "";
    text += `YOU choose  "${humanChoice}" and  CPU choose  "${computerChoice}". `;
    
    //Rock vs Paper
    if(humanChoice == "paper" && computerChoice == "rock"){
        roundWinner = "Player";
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        roundWinner = "Computer";
    }
    
    //Rock vs Scissors
    if(humanChoice == "rock" && computerChoice == "scissors"){
        roundWinner = "Player";
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        roundWinner = "Computer";
    }

    //Paper vs Scissors
    if(humanChoice == "scissors" && computerChoice == "paper"){
        roundWinner = "Player";
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        roundWinner = "Computer";
    }
    
    
    if(roundWinner === "Player"){
        humanScore = humanScore +  1;
    }else if(roundWinner === "Computer"){
        computerScore = computerScore + 1;
    }else{
        roundWinner = "Nobody"
    }

    displayScore();
    text += ` ${roundWinner} Won.`
    let resultDisplay = document.querySelector(".round-result");
    resultDisplay.textContent = text;
    isGameOver();
    
}

function displayScore(){
    let scoreDisplay = document.querySelector(".score-display");
    scoreDisplay.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
}

function isGameOver(){
    if (humanScore >= 5 || computerScore >= 5){
        let finalWinner = humanScore >= 5 ? "Player"  : "CPU";

        document.querySelector(".end-result").textContent = `It's the End of The Game... ${finalWinner} Won The Match`;
        let allButtons = document.querySelectorAll(".btn");
        allButtons.forEach((button)=>{
            button.disabled = true;
        })
    }
}



let allButtons = document.querySelectorAll(".btn");

allButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let cpuChoice = getComputerChoice()
        let playerChoice = (button.textContent).toLowerCase();
        playRound(playerChoice,cpuChoice);
    })
})

