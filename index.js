window.onload = function() {

const choices= ["snake", "water", "gun"];
const Player=document.getElementById("PlayerResult");
const Computer=document.getElementById("Computerresult");
const Result=document.getElementById("result");
const playerscoredisplay=document.getElementById("playerScore");
const computerscoredisplay=document.getElementById("ComputerScore");
let playerScore=0;
let computerScore=0;
function play(playerchoice)
{
     const computerchoice=choices[Math.floor(Math.random()*3)];
     let result="";
     if(playerchoice===computerchoice)
     {
         result="It's a tie";
     }
     else{
        switch(playerchoice)
        {
            case "snake":
                result=(computerchoice==="gun")?'Computer wins':'Player wins';
                break;
                case "water":
                result=(computerchoice==="snake")?'Computer wins':'Player wins';
                break;
                case "gun":
                result=(computerchoice==="water")?"Computer wins":"Player wins";
                break;
        }
     }
     Result.classList.remove("greentext", "redtext","yellowtext");
     switch(result)
     {
        case "Computer wins":
            Result.classList.add("greentext");
            computerScore++;
            computerscoredisplay.textContent=computerScore;
            break;
        case "Player wins":
            Result.classList.add("redtext");
            playerScore++;
            playerscoredisplay.textContent=playerScore;
            break;
        case "It's a tie":
            Result.classList.add("yellowtext");
            break;
     }
     Player.textContent=`Player : ${playerchoice}`;
    Computer.textContent=`Computer : ${computerchoice}`;
    Result.textContent=result;
}
console.log("Script loaded");
window.play=play;
};
