const numberDisplay = document.getElementById("number");
let number = 0;
function addNumber() {
    number++;
    if (number == 10) {
        number = 0;
       }
   numberDisplay.innerHTML = number;
}