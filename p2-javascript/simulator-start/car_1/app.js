const car = document.getElementById("car");
let carPosition = 650;
let drive;
function start() {
  clearTimeout(drive);// Als je klikt de kopje meer dan een keer.
  carPosition -= 5;
  car.style.top = carPosition + "px";
  drive = setTimeout(start, 20);
}
function again() {
  clearTimeout(drive);
  carPosition = 650;
  car.style.top = carPosition + "px";
}
function stop() {
  clearTimeout(drive);
}
