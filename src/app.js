/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let numberCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let sticks = ["♦", "♥", "♠", "♣"];
  let numberRandom = Math.floor(Math.random() * numberCard.length) + 2;
  let sticksRandom = Math.floor(Math.random() * sticks.length);

  let card = document.querySelector("#root");
  let divTop = document.createElement("div");
  let divMiddle = document.createElement("div");
  let divBottom = document.createElement("div");

  // card
  card.classList.add("card");
  card.appendChild(divTop);
  card.appendChild(divMiddle);
  card.appendChild(divBottom);

  // top
  divTop.textContent = sticks[sticksRandom];
  divTop.classList.add("sticks");
  if (sticks[sticksRandom] === "♦" || sticks[sticksRandom] === "♥") {
    divTop.classList.add("red");
  }

  // middle
  divMiddle.textContent = numberRandom;
  divMiddle.classList.add("number");

  // Bottom
  divBottom.textContent = sticks[sticksRandom];
  divBottom.classList.add("sticks");
  divBottom.classList.add("stickDown");
  if (sticks[sticksRandom] === "♦" || sticks[sticksRandom] === "♥") {
    divBottom.classList.add("red");
  }
};
