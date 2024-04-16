// COIN FLIP SIMULATOR

// HTML Variables 
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let rollout1El = document.getElementById("rollout1");
let rollout2El = document.getElementById("rollout2");
let rollout3El = document.getElementById("rollout3");
let rollout4El = document.getElementById("rollout4");
let rollout5El = document.getElementById("rollout5");
let rollout6El = document.getElementById("rollout6");

// Count Variales 
let numHeads = 0;
let numTails = 0;
let numDice1 = 0;
let numDice2 = 0;
let numDice3 = 0;
let numDice4 = 0;
let numDice5 = 0;
let numDice6 = 0;


// Button Event Listener 
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    // Generate a random number 
    let randNum = Math.random();
   console.log("randNum");

   // simulate the coin flip 
   if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads++;
    headsEl.innerHTML = numHeads;
   } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails++;
    tailsEl.innerHTML = numTails;
   }
}

// Dice Event listener
document.getElementById("btn2").addEventListener("click", btn2Clicked);

function btn2Clicked() {
    // Generate a random number
    let randNum2 = Math.random();
    console.log("randNum2");

    // simulate dice roll
    if (randNum2 < 0.45) {
     outputEl.innerHTML = "<img src='img/1.png'>";
     numDice1 = numDice1 + 1  ;
     rollout1El.innerHTML = numDice1;
    } else if (randNum2 < 0.5) {
     outputEl.innerHTML = "<img src='img/2.png'>";
     numDice2 = numDice2 + 1;
     rollout2El.innerHTML = numDice2;
    } else if (randNum2 < 0.55) {
     outputEl.innerHTML = "<img src='img/3.png'>";
     numDice3 = numDice3 + 1;
     rollout3El.innerHTML = numDice3;
    } else if (randNum2 < 0.75) {
     outputEl.innerHTML = "<img src='img/4.png'>";
     numDice4 = numDice4 + 1;
     rollout4El.innerHTML = numDice4;
    } else if (randNum2 < 0.9) {
     outputEl.innerHTML = "<img src='img/5.png'>";
     numDice5 = numDice5 + 1;
     rollout5El.innerHTML = numDice5;
    } else   {
     outputEl.innerHTML = "<img src='img/6.png'>";
     numDice6 = numDice6 + 1;
     rollout6El.innerHTML = numDice6;
    }
}