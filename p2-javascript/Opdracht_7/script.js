const block = document.getElementById("block");
let i = 0;
setInterval(() => {
  i += 10;
  let position = i + "px";
  let width = window.innerWidth;
  block.style.left = position;
  if (i > width) {
    i = 0;
  }
}, 100);
block.addEventListener("click", changeColor);
function changeColor() {
  const colors = ["red", "blue", "green", "orange", "yellow"];
  let math = Math.floor(Math.random(colors.length) * 10);
  block.style.backgroundColor = colors[math];
}
