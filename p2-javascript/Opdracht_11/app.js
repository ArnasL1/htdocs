const gameScreen = document.getElementById("game");
const mainText = document.getElementById("mainText");
const secondaryText = document.getElementById("secondaryText");
let gameInProgress = false;
let gameWait = false;
let startReaction;
let GameTimer;
document.addEventListener("click", () => {
  if (!gameInProgress) {
    gameInProgress = true;
    gameWait = true;
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
      endReaction -
      startReaction +
      " ms" +
      "<br>Klik om het opnieuw te proberen!";
    gameInProgress = false;
    gameWait = false;
  }
});
