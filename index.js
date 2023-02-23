"use strict";

const jsonData = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
console.log("Hello World!");

const score = document.querySelectorAll(".sum-score");
const category = document.querySelectorAll(".js-change");

for (let i = 0; i < 4; i++) {
  console.log(score[i].innerHTML);
  score[i].innerHTML = `${jsonData[i].score}<span>&nbsp;/ 100</span>`;
  category[i].innerHTML = `${jsonData[i].category}`;
}
