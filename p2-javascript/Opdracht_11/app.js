const gameScreen = document.getElementById("game");
const mainText = document.getElementById("mainText");
const secondaryText = document.getElementById("secondaryText");
const button = document.getElementById("button");
let gameInProgress = false;
let gameWait = false;
let startReaction;
let GameTimer;
document.addEventListener("click", (e) => {
  if (!gameInProgress && e.target.toString() == "[object HTMLButtonElement]") {
    gameInProgress = true;
    gameWait = true;
    button.style.display = "none";
    randomTime = Math.floor(Math.random() * 4000 + 3000);
    gameScreen.style.backgroundColor = "var(--red)";
    mainText.innerHTML = "Wacht...";
    secondaryText.innerHTML = "";
    GameTimer = setTimeout(() => {
      startReaction = Date.now();
      gameWait = false;
      gameScreen.style.backgroundColor = "var(--green)";
      mainText.innerHTML = "Klik!";
      secondaryText.innerHTML = "";
    }, randomTime);
  } else if (gameInProgress && gameWait) {
    clearTimeout(GameTimer);
    gameInProgress = false;
    gameWait = false;
    mainText.innerHTML = "Je hebt te snel geklikt!";
    secondaryText.innerHTML = "Klik om het opnieuw te proberen!";
    gameScreen.style.backgroundColor = "var(--blue)";
  } else if (gameInProgress && !gameWait) {
    gameScreen.style.backgroundColor = "var(--blue)";
    let endReaction = Date.now();
    mainText.innerHTML = "Jouw reactie:";
    secondaryText.innerHTML =
      endReaction - startReaction + " ms<br>Klik om het opnieuw te proberen!";
    button.style.display = "inline-block";
    gameInProgress = false;
    gameWait = false;
  }
});
