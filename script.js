const audio = new Audio("audio.mp3");
const form = document.querySelector("#seya7");
const body = document.querySelector("body");

const audioPlay = (e) => {
  audio.play();
  body.style.backgroundImage = "url('ehda.jpg')";
  e.preventDefault();
};

form.addEventListener("submit", audioPlay);
audio.addEventListener("ended", () => {
  body.style.background = "none";
});
