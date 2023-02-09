let w= 0;
let l = 0;
let d = 0;

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
         w++
         return console.log("YOU WIN") 
         break
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
         l++
         return console.log("YOU LOSE")
         break
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
         d++
         return console.log("DRAW")
         break
   }
}

function game ()
{
   let rounds;

   for (let i = 0; i< 5; i++)
   {
      playRound(getPlayerChoice(), getComputerChoice());
      
   }
   if (w>l)
   {
      console.log("You win the game!");
   }
   else if (l>w)
   {
      console.log("COmputer win the game!");
   }
   else 
   console.log("Game is draw!");
}

console.log(game(), l);