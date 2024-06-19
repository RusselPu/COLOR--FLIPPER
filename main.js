const colorText = document.querySelector(".color");
const inputColor = document.getElementById("color-input");
const generateColor = document.getElementById("generate-color");
const randomColor = document.getElementById("random-color");

generateColor.addEventListener("click", () => {
  const newColor = inputColor.value;
  changeBackgroundColor(newColor);
  inputColor.value = "";
});

randomColor.addEventListener("click", () => {
  const newColor = generateRandomHexColor();
  changeBackgroundColor(newColor);
});

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
}

function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}
