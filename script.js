const audio = new Audio("audio.mp3");
const form = document.querySelector("#seya7");
const body = document.querySelector(".body");
let x = 0;

const audioPlay = (e) => {
  audio.play();
  if (x !== 3) body.classList.toggle("pic");
  x = 3;
  e.preventDefault();
};

form.addEventListener("submit", audioPlay);
audio.addEventListener("ended", () => {
  if (x === 3) body.classList.toggle("pic");
  x = 0;
});
