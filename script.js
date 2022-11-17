let cur = 0;
// let main = 0;
// let temp = 0;
let randomNum = 0;
let img = document.querySelector(".img");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");
let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");
let random = document.querySelector(".random");
let newGame = document.querySelector(".newGame");

const makeRandom = () => Math.ceil(Math.random() * 6);

random.textContent = "Start...";

function switchSide(target) {
  if (target === 1) {
    document.querySelector(".main1").classList.add("activeMain");
    document.querySelector(".main2").classList.remove("activeMain");
    document.querySelector(".temp1").classList.add("activeTemp");
    document.querySelector(".temp2").classList.remove("activeTemp");
    console.log(document.querySelector(".main1").classList);
    console.log(document.querySelector(".main2").classList);
    console.log(document.querySelector(".temp1").classList);
    console.log(document.querySelector(".temp2").classList);
  } else if (target === 2) {
    document.querySelector(".main1").classList.remove("activeMain");
    document.querySelector(".main2").classList.add("activeMain");
    document.querySelector(".temp1").classList.remove("activeTemp");
    document.querySelector(".temp2").classList.add("activeTemp");
    console.log(document.querySelector(".main1").classList);
    console.log(document.querySelector(".main2").classList);
    console.log(document.querySelector(".temp1").classList);
    console.log(document.querySelector(".temp2").classList);
  }
}

roll.addEventListener("click", () => {
  randomNum = makeRandom();
  //temporary
  random.textContent = randomNum;
  //display image
  img.src = `dice-${randomNum}.png`;

  //add to temp
  cur = +temp1.textContent;
  temp1.textContent = randomNum !== 1 ? cur + randomNum : cur + randomNum;
  // switchSide();
  // "Lost!"; (change player actually)
});

let count = 1;

hold.addEventListener("click", () => {
  document.querySelector(".activeMain").textContent =
    +document.querySelector(".activeMain").textContent +
    +document.querySelector(".activeTemp").textContent;
  let value = +document.querySelector(".activeMain").textContent;
  document.querySelector(".activeTemp").textContent = 0;
  if (value >= 10) {
    random.textContent = `Win`;
  }
  count = count === 1 ? 2 : 1;
  switchSide(count);
});

newGame.addEventListener("click", () => {
  main1.textContent = 0;
  temp1.textContent = 0;
  random.textContent = "Start...";
});
