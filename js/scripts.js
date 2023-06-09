// Business Logic

function mrRobo(number) {
  let loopOutput = [];

  for (i = 0; i <= number; i++) {
    if (i.toString().includes('3')) {
      loopOutput.push("Won't you be my neighbor?");

    } else if (i.toString().includes('2')) {
      loopOutput.push("Boop!");

    } else if (i.toString().includes('1')) {
      loopOutput.push("Beep!");
    
    } else {
      loopOutput.push(i);
    }
  }
  return loopOutput;
}


// UI Logic

document.addEventListener('submit', function(event) {
  event.preventDefault();
  const usersNumber = document.getElementById('ui-user-number').value;
  const arrayOutput = mrRobo(usersNumber);
  const outputAsString = arrayOutput.join(", ");
  document.getElementById('ui-array-output');

})