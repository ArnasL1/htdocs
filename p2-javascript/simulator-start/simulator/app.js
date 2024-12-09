const trafficLight = document.getElementsByClassName("trafficLight");
const car = document.getElementsByClassName("car");
const carPositionLimit = [515, 280, 720, 450];
let carPosition = [650, 10, 1450, 10];
const carSpeedLimits = [8, 10, 13, 5];
let speed = [0, 0, 0, 0];
let drive;
let working;
let outOfOrder;
let brake = false;
let horizBrake = false;

// Traffic lights
function red() {
  trafficLight[0].src = "./img/trafficLightRed.png";
  trafficLight[1].src = "./img/trafficLightRed2.png";
  brake = true;
}
function green() {
  trafficLight[0].src = "./img/trafficLightGreen.png";
  trafficLight[1].src = "./img/trafficLightGreen2.png";
  brake = false;
}
function yellow() {
  trafficLight[0].src = "./img/trafficLightYellow.png";
  trafficLight[1].src = "./img/trafficLightYellow2.png";
  brake = false;
}
function shutOff() {
  trafficLight[0].src = "./img/shutOff.png";
  trafficLight[1].src = "./img/shutOff2.png";
  trafficLight[2].src = "./img/shutOff3.png";
  trafficLight[3].src = "./img/shutOff4.png";
  brake = false;
}
// voor horizontale autos
function horizRed() {
  trafficLight[2].src = "./img/trafficLightRed3.png";
  trafficLight[3].src = "./img/trafficLightRed4.png";
  horizBrake = true;
}
function horizGreen() {
  trafficLight[2].src = "./img/trafficLightGreen3.png";
  trafficLight[3].src = "./img/trafficLightGreen4.png";
  horizBrake = false;
}
function horizYellow() {
  trafficLight[2].src = "./img/trafficLightYellow3.png";
  trafficLight[3].src = "./img/trafficLightYellow4.png";
  horizBrake = false;
}

//Traffic light modes
function turnOn() {
  clearTimeout(outOfOrder);
  red();
  horizGreen();
  working = setTimeout(horizYellow, 4000);
  working = setTimeout(green, 6000);
  working = setTimeout(horizRed, 6000);
  working = setTimeout(yellow, 10000);
  working = setTimeout(turnOn, 12000);
}
function blink() {
  clearTimeout(working);
  yellow();
  horizYellow();
  outOfOrder = setTimeout(shutOff, 500);
  outOfOrder = setTimeout(blink, 1000);
}
function turnOff() {
  clearTimeout(working);
  clearTimeout(outOfOrder);
  shutOff();
}
// beginnen rijden
function start() {
  clearTimeout(drive); // Als je klikt de kopje meer dan een keer.
  if (carPosition[0] < -80) {
    carPosition[0] = 800;
  }
  if (carPosition[1] > 800) {
    carPosition[1] = -80;
  }
  if (carPosition[2] < -80) {
    carPosition[2] = 1550;
  }
  if (carPosition[3] > 1550) {
    carPosition[3] = -80;
  }
  //check als de auto moet stoppen
  if (
    brake &&
    carPosition[0] <= carPositionLimit[0] &&
    carPosition[0] > carPositionLimit[0] - 15
  ) {
    speed[0] = 0;
  } else {
    if (speed[0] < carSpeedLimits[0]) {
      speed[0] += 0.25;
    }
  }
  if (
    brake &&
    carPosition[1] <= carPositionLimit[1] &&
    carPosition[1] > carPositionLimit[1] - 15
  ) {
    speed[1] = 0;
  } else {
    if (speed[1] < carSpeedLimits[1]) {
      speed[1] += 0.25;
    }
  }
  if (
    horizBrake &&
    carPosition[2] <= carPositionLimit[2] &&
    carPosition[2] > carPositionLimit[2] - 15
  ) {
    speed[2] = 0;
  } else {
    if (speed[2] < carSpeedLimits[2]) {
      speed[2] += 0.25;
    }
  }

  if (
    horizBrake &&
    carPosition[3] <= carPositionLimit[3] &&
    carPosition[3] > carPositionLimit[3] - 15
  ) {
    speed[3] = 0;
  } else {
    if (speed[3] < carSpeedLimits[3]) {
      speed[3] += 0.25;
    }
  }
  //Veranderen de positie van de autos
  carPosition[0] -= speed[0];
  carPosition[1] += speed[1];
  carPosition[2] -= speed[2];
  carPosition[3] += speed[3];
  car[0].style.top = carPosition[0] + "px";
  car[1].style.top = carPosition[1] + "px";
  car[2].style.left = carPosition[2] + "px";
  car[3].style.left = carPosition[3] + "px";
  drive = setTimeout(start, 20);
}
// veranderen de posities van de autos naar de originele posities
function again() {
  clearTimeout(drive);
  carPosition = [650, 10, 1450, 10];
  // Reset de position voor elke auto
  car[0].style.top = carPosition[0] + "px";
  car[1].style.top = carPosition[1] + "px";
  car[2].style.left = carPosition[2] + "px";
  car[3].style.left = carPosition[3] + "px";
}
//stoppen de autos
function stop() {
  clearTimeout(drive);
}
