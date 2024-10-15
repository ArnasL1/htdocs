const block = document.getElementById("block");
let moveV = 0;
let moveH = 0;
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
    case "d":
    case "D":
      moveH += 10;
      block.style.left = moveH + "px";
      break; 
    case "ArrowLeft":
    case "a":
    case "A":
      moveH -= 10;
      block.style.left = moveH + "px";
      break; 
    case "ArrowUp":
    case "w":
    case "W":
      moveV -= 10;
      block.style.top = moveV + "px";
      break; 
    case "ArrowDown":
    case "s":
    case "S":
      moveV += 10;
      block.style.top = moveV + "px";
      break; 
  }
});
