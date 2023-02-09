let playerWin= 0;
let computerWin = 0;

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
   switch (playerSelection + computerSelection)
   {     
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
         playerWin++
         return console.log("YOU WIN") 
         break
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
         computerWin++
         return console.log("YOU LOSE")
         break
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
         return console.log("DRAW")
         break
   }
}

function game()
{

   for (let i = 0; i< 5; i++)
   {
      playRound(getPlayerChoice(), getComputerChoice());
      
   }
   
   if (playerWin>computerWin)
   {
      console.log("You win the game!");
   }
   else if (computerWin>playerWin)
   {
      console.log("Computer won the game!");
   }
   else 
   console.log("Game is draw!");
}

console.log(game());