function changeTrafficLight() {
  const trafficLight = document.getElementById("traffic-light");
  if (trafficLight.src.match("trafficLightRed")) {
    trafficLight.src = "trafficLightGreen.png";
  } else if ((trafficLight.src.match("trafficLightGreen"))) {
    trafficLight.src = "trafficLightYellow.png";
  } else {
    trafficLight.src = "trafficLightRed.png";
  }
}
