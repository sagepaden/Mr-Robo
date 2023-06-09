// Bussiness Logic

function mrRobo(userNumber) {
  let loopOutput = [];

  for (i = 0; i <= userNumber; i++) {
    if (i.toString().includes('3')) {
      loopOutput.push("Won't you be my neighbor?");
      
    } else if (i.toString().includes('2')) {
      loopOutput.push("Boop!");

    } else if (i.toString().includes('1')) {
      loopOutput.push("Beep!");
    
    } else {
      loopOutput.push(i);
    }
    console.log(loopOutput);
  }
}
