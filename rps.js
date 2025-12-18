// const { use } = require("react");


let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawGame = () => {
   
            msg.innerText = "Game Was Draw. Play Again!";
                    msg.style.backgroundColor = "purple";


};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
       
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else {
        compScore ++;
                compScorePara.innerText = compScore;

    
                msg.innerText = "You lose!"
                        msg.style.backgroundColor = "red";


    }
}


const playGame = (userChoice) =>{
console.log("user choice = " , userChoice);
// Generate Computer choice ->
const compChoice= genCompChoice();
console.log(" comp Choice =",compChoice);

if(userChoice === compChoice){
    // Draw Game
drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        // scissors, paper
       userWin =  compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        // rock, scissor
      userWin =  compChoice === "scissor" ? false : true;
    } else {
        // rock, paper 
     userWin =    compChoice === "rock" ? false : true;
    }
showWinner(userWin,userChoice,compChoice);
}


};

choices.forEach((choice) =>{
    // console.log(choice)
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
playGame(userChoice);
    });
});