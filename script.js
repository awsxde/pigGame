//active player
let activePlayer = 0;

//elements
let img = document.querySelector(".img");
let random = document.querySelector(".random");
let main = document.querySelector(`.main${activePlayer}`);
let temp = document.querySelector(`.temp${activePlayer}`);

//buttons
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");
let newGame = document.querySelector(".newGame");

//functions
const makeRandom = () => Math.ceil(Math.random() * 6);
const win = () => (random.textContent = `Player${activePlayer + 1} won!`);
const switchSide = () => {
  //reset temp
  temp.textContent = 0;

  //change side
  activePlayer = activePlayer === 0 ? 1 : 0;

  //reselect active player stuff
  main = document.querySelector(`.main${activePlayer}`);
  temp = document.querySelector(`.temp${activePlayer}`);
};

//start of app
random.textContent = "Start...";

roll.addEventListener("click", () => {
  //generate
  let randomNum = makeRandom();

  //display
  random.textContent = randomNum;
  img.src = `dice-${randomNum}.png`;

  //add to temp
  randomNum !== 1
    ? (temp.textContent = +temp.textContent + randomNum)
    : switchSide();
});

hold.addEventListener("click", () => {
  //update main
  main.textContent = +main.textContent + +temp.textContent;

  //reset temp
  temp.textContent = 0;

  //check for win state or switch side
  main.textContent >= 100 ? win() : switchSide();
});

newGame.addEventListener("click", () => {
  //reset everything
  main.textContent = 0;
  temp.textContent = 0;
  random.textContent = "Start...";
});
