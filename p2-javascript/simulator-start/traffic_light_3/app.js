/*const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const yellowButton = document.getElementById("yellow");
const shutOffButton = document.getElementById("shutOff");*/
const trafficLight = document.getElementById("traffic-light");
let working;
let outOfOrder;

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
/*redButton.addEventListener("click", red);
greenButton.addEventListener("click", green);
yellowButton.addEventListener("click", yellow);
shutOffButton.addEventListener("click", shutOff);*/
function turnOn() {
  clearTimeout(outOfOrder);
  red();
  working = setTimeout(green, 4000);
  working = setTimeout(yellow, 8000);
  working = setTimeout(turnOn, 10000);
}
function blink() {
  clearTimeout(working);
  yellow();
  outOfOrder = setTimeout(shutOff, 500);
  outOfOrder = setTimeout(blink, 1000);
}
function turnOff() {
  clearTimeout(working);
  clearTimeout(outOfOrder);
  shutOff();
}
