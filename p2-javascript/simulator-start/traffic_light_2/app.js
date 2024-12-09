const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const yellowButton = document.getElementById("yellow");
const shutOffButton = document.getElementById("shutOff");
const trafficLight = document.getElementById("traffic-light");
function red() {
  trafficLight.src = "./img/trafficLightRed.png";
}
function green() {
  trafficLight.src = "./img/trafficLightGreen.png";
}
function yellow() {
  trafficLight.src = "./img/trafficLightYellow.png";
}
function shutOff() {
  trafficLight.src = "./img/shutOff.png";
}
redButton.addEventListener("click", red);
greenButton.addEventListener("click", green);
yellowButton.addEventListener("click", yellow);
shutOffButton.addEventListener("click", shutOff);
