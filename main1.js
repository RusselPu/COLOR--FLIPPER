const hex = "0123456789ABCDEF";
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
