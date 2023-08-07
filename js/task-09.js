const changingColor = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body")

changingColor.addEventListener("click", changeColor);

function changeColor(event) {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  nameOfColor.textContent = randomColor;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

