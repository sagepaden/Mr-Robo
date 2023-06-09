// Bussiness Logic

function mrRobo(userNumber) {
  let loopOutput = [];

  for (i = 0; i <= userNumber; i++) {
    if (i.toString().includes('3')) {
      loopOutput.push("Won't you be my neighbor?");
    } else {
      loopOutput.push(i);
    }
    console.log(loopOutput);
  }
}
