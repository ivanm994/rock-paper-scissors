function getComputerChoice()
{
   let rpsArray = ["rock", "paper", "scissors"];
   
   let randomIndex = Math.floor(Math.random() * rpsArray.length);

   let play = rpsArray[randomIndex];
   return play;
}

function getPlayerChoice()
{
   let choice = prompt("Please write your weapon: ");
   return choice.toLowerCase();
}

function playRound (playerSelection, computerSelection)
{
   let winner;
   switch (playerSelection + computerSelection)
   {     
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
         return winner = "YOU WIN"
         break
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
         return winner = "YOU LOSE"
         break
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
         return winner = "DRAW"
         break
   }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));