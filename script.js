
const handOptions = {
  rock: "Group 4.png",
  paper: "Group 2.png",
  scissors: "Group 1.png",
};

let compScore = 0;
let myScore = 0;

const compScore1= document.querySelector("#comp-Score");
const myScore1= document.querySelector("#my-Score");



const pickUserHand = (userHand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[userHand];

  pickComputerHand(userHand);
  
};

const pickComputerHand = (userHand) => {
  let hands = ["rock", "paper", "scissors"];
  let cphand = hands[Math.floor(Math.random() * hands.length)];

  document.getElementById("computerPickImage").src = handOptions[cphand];

  referee(userHand, cphand);
  //return cphand;
};

const referee = (userHand, cphand) => {
  if (userHand == "paper" && cphand == "scissors") {
    setDecision("YOU LOSE");
    compScore++ ;
    compScore1.innerText=compScore;
  }
  if (userHand == "paper" && cphand == "rock") {
    setDecision("YOU WIN");
    myScore++;
    myScore1.innerText=myScore;

  }
  if (userHand == "paper" && cphand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cphand == "scissors") {
    setDecision("YOU WIN!");
    myScore++;
    myScore1.innerText=myScore;
  }
  if (userHand == "rock" && cphand == "paper") {
    setDecision("YOU LOSE!");
    compScore++;
    compScore1.innerText=compScore;
  }
  if (userHand == "rock" && cphand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cphand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cphand == "rock") {
    setDecision("YOU LOSE!");
    compScore++;
    compScore1.innerText=compScore;
  }
  if (userHand == "scissors" && cphand == "paper") {
    setDecision("YOU WIN!");
    myScore++;
    myScore1.innerText=myScore;
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}



/*
document.addEventListener("DOMContentLoaded",function() {

let compScore = parseInt(localStorage.getItem('compScore')) || 0;
let myScore = parseInt(localStorage.getItem('myScore')) || 0;

const handOptions = {
  rock: "Group 4.png",
  paper: "Group 2.png",
  scissors: "Group 1.png",
};

const compScore1= document.querySelector("#comp-Score");
const myScore1= document.querySelector("#my-Score");


const pickUserHand = (userHand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[userHand];

  pickComputerHand(userHand);
  
};

const pickComputerHand = (userHand) => {
  let hands = ["rock", "paper", "scissors"];
  let cphand = hands[Math.floor(Math.random() * hands.length)];

  document.getElementById("computerPickImage").src = handOptions[cphand];

  referee(userHand, cphand);
  //return cphand;
};

const referee = (userHand, cphand) => {


  if (userHand == "paper" && cphand == "scissors") {
    setDecision("YOU LOSE");
    compScore++ ;
    compScore1.innerText=compScore;
  }
  if (userHand == "paper" && cphand == "rock") {
    setDecision("YOU WIN");
    myScore++;
    myScore1.innerText=myScore;

  }
  if (userHand == "paper" && cphand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cphand == "scissors") {
    setDecision("YOU WIN!");
    myScore++;
    myScore1.innerText=myScore;
  }
  if (userHand == "rock" && cphand == "paper") {
    setDecision("YOU LOSE!");
    compScore++;
    compScore1.innerText=compScore;
  }
  if (userHand == "rock" && cphand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cphand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cphand == "rock") {
    setDecision("YOU LOSE!");
    compScore++;
    compScore1.innerText=compScore;
  }
  if (userHand == "scissors" && cphand == "paper") {
    setDecision("YOU WIN!");
    myScore++;
    myScore1.innerText=myScore;
  }

  localStorage.setItem('compScore', compScore);
  localStorage.setItem('myScore', myScore);
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

saveToLocal();

});

*/
