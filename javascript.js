function getComputerChoice()
{
   let rpsArray = ["Rock", "Paper", "Scissors"];
   
   let randomIndex = Math.floor(Math.random() * rpsArray.length);

   let play = rpsArray[randomIndex];
   return play;
}

console.log(getComputerChoice());