"use strict";

const point0 = document.querySelector(".point--0");
const current0 = document.getElementById("newscore--0");
const current1 = document.getElementById("newscore--1");
const player0 = document.querySelector(".pgame--0");
const player1 = document.querySelector(".pgame--1");

const point1 = document.querySelector(".point--1");
const diceEl = document.querySelector(".dice");
const rdice = document.querySelector(".rdice");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".ngame");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`newscore--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--Active");
  player1.classList.toggle("player--Active");
};


const innit = function(){
  playing = true;
  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;

  point0.textContent = 0;
  point1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  player0.classList.remove("player--Winner");
  player1.classList.remove("player--Winner");
  player0.classList.add("player--Active");
  player1.classList.remove("player--Active");

  document.querySelector(`.point--${activePlayer}`).textContent = 0;

};


innit();

rdice.addEventListener("click", function () {
  if (playing) {
    // Generate a random number between 1-6
    const dice = Number(Math.trunc(Math.random() * 6) + 1);

    //Display dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    //adding up scores
    if (dice !== 1) {
      //Add to current score
      currentScore += dice;
      document.getElementById(`newscore--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch active player
      switchPlayer();
    }
  }
});




hold.addEventListener("click", function () {
  if (playing) {
    //Adding up current scores
    scores[activePlayer] += currentScore;
    document.querySelector(`.point--${activePlayer}`).textContent =
      scores[activePlayer];

    //Switching the active player
    if (scores[activePlayer] >= 50) {
      //finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
      .querySelector(`.pgame--${activePlayer}`)
        .classList.add("player--Winner");
        
      document
        .querySelector(`.pgame--${activePlayer}`)
        .classList.remove("player--Active");
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', innit)
