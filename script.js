// Starting at 0 because no door has been chosen yet
let chosenDoor = 0;
let attempts = 0;


function openDoor(doorNumber) {

  let message;
  // Check the last choice before changing the chosen door
  if (chosenDoor === doorNumber) {
    message = "You just tried this door. Choose a different one!"; } 
  
    else {
    chosenDoor = doorNumber;
    attempts += 1;

    // Each door has its own outcome and display message
    if (chosenDoor === 1) {
      message = "You found the exit. You escaped!";} 

    else if (chosenDoor === 2) {
      message = "A ghost scared you. Try another door!";} 

    else {
      message = "You found a hidden treasure!";}
    }

  // Show the outcome and update the count on the screen
  document.getElementById("result").innerHTML = message;
  document.getElementById("attempts").innerHTML = "Attempts: " + attempts;
}


function resetGame() {

  // Clear the choices so the player can restart with no choices made yet

  chosenDoor = 0;
  attempts = 0;

  document.getElementById("result").innerHTML = "Click a door to find out what happens.";
  document.getElementById("attempts").innerHTML = "Attempts: 0";
}
