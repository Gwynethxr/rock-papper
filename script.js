//TEXT
let humanMove = document.getElementById("hMove") // TEXT human move
let cpuMove = document.getElementById("cMove") // TEXT cpu move
let roundMatch = document.getElementById("round") //TEXT round 0-5
let hScore = document.getElementById("hScore") // TEXT SCORE Human
let cScore = document.getElementById("cScore") // TEXT computer Score
let win = document.getElementById("winner") // TEXT Winner

//Button
const rockMove = document.getElementById("rock") // ROCK BUTTON
const scissorMove = document.getElementById("scissors") // Scissors Button
const papperMove = document.getElementById("papper") // Papper button

//variable
humanScore = 0;
computerScore = 0;
round = 0;


function getComputerChoice(){
    const computerC = ["Rock","Papper","Scissors"]
    return computerC[Math.floor(Math.random() * 3)];
}

rockMove.addEventListener("click",() =>{
    playRound("Rock")
    updateScore()
})

scissorMove.addEventListener("click",() => {
    playRound("Scissors")
    updateScore()
})

papperMove.addEventListener("click",() =>{
    playRound("Papper")
    updateScore()
})

function playRound(humanSelection){
    const computerSelection = getComputerChoice();
    
    if(humanSelection === computerSelection){ //calculation if its Tie
        win.innerHTML = "Tie !"
    }
    //Calculate Rock papper scissor
    if(humanSelection === "Rock"){ 
        humanMove.innerHTML = "Rock"
        cpuMove.innerHTML = computerSelection;
        if(computerSelection === "Papper"){
            computerScore++
            win.innerHTML = "You Lost Computer Win"
        }else if(computerSelection === "Scissors"){
             humanScore++
            win.innerHTML ="You Win Computer lost"
        }
    }
    if(humanSelection === "Scissors"){
        humanMove.innerHTML = "Scissors"
        cpuMove.innerHTML = computerSelection;
        //calculation if its Scissors
        if(computerSelection === "Papper"){
             humanScore++
            win.innerHTML = "You Win Computer Lost"
        }else if(computerSelection === "Rock"){
             computerScore++
            win.innerHTML = "You Lost Computer Win"
        }
    }
    if(humanSelection === "Papper"){
        humanMove.innerHTML = "Papper"
        cpuMove.innerHTML = computerSelection;
        if(computerSelection === "Rock"){
             humanScore++
            win.innerHTML = "You Win Computer Lost"
        }else if(computerSelection === "Scissors"){
             computerScore++
            win.innerHTML = "You Lost Computer Win"
        }
    }
    round++
}

function updateScore(){
    roundMatch.innerHTML = round;
    console.log(round)
    hScore.innerHTML = `${humanScore}`
    cScore.innerHTML = `${computerScore}`

    if(round >= 5 ){
        round -= round;
       computerScore -= computerScore;
       humanScore -= humanScore;
    }
}