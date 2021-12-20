const audio = new Audio("audio.mp3");
const form = document.querySelector("#seya7");
const body = document.querySelector(".body");
const imgs = ["ehda.jpg", "ehda2.jpg"];
let x = 0;

const audioPlay = (e) => {
  if (x !== 3) {
    body.classList.toggle("pic");
    const pic = document.querySelector(".pic");
    audio.play();
    pic.style.backgroundImage = "url('ehda.jpg')";
    setInterval(() => {
      pic.style.backgroundImage = "url('ehda2.jpg')";
    }, 7000);
  }
  x = 3;
  e.preventDefault();
};

form.addEventListener("submit", audioPlay);

audio.addEventListener("ended", () => {
  const pic = document.querySelector(".pic");
  pic.style.backgroundImage = "none";
  if (x === 3) body.classList.toggle("pic");
  x = 0;
});
