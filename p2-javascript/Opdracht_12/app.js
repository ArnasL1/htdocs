const hungerDisplay = document.getElementById("hunger");
const energyDisplay = document.getElementById("energy");
const happinessDisplay = document.getElementById("happiness");
const hungerBar = document.getElementById("hungerBar");
const energyBar = document.getElementById("energyBar");
const happinessBar = document.getElementById("happinessBar");
const feedButton = document.getElementById("feed");
const sleepButton = document.getElementById("sleep");
const playButton = document.getElementById("play");
const status = document.getElementById("statusMessage");
let hunger = 100;
let energy = 100;
let happiness = 100;
//Kijken als de tamagotchi is dood of verminderen de statusen, elke seconde
setInterval(() => {
  if (hunger <= 0 && energy <= 0 && happiness <= 0) {
    status.innerHTML = "Je Tamagotchi is dood!";
  } else {
    status.innerHTML = "Je Tamagotchi is gelukkig!";
    //Vermijnderen alle statusen van Tamagotchi
    if (hunger > 0) {
      hunger--;
    }
    if (energy > 0) {
      energy--;
    }
    if (happiness > 0) {
      happiness--;
    }
    // Display de nieuwe statusen
    hungerDisplay.innerHTML = `Honger: ${hunger}`;
    hungerBar.style.width = hunger + "%";
    energyDisplay.innerHTML = `Energie: ${energy}`;
    energyBar.style.width = energy + "%";
    happinessDisplay.innerHTML = `Geluk: ${happiness}`;
    happinessBar.style.width = happiness + "%";
  }
  //Knoppjes:
}, 1000);
feedButton.addEventListener("click", () => {
  hunger = Math.min(100, (hunger += 25));
});
sleepButton.addEventListener("click", () => {
  energy = Math.min(100, (energy += 25));
});
playButton.addEventListener("click", () => {
  happiness = Math.min(100, (happiness += 25));
});
