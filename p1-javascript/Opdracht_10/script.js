const answerDisplay = document.getElementById("answerDisplay");
let first;
let second;
function add() {
    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    if (first == 0 && second == 0) {
        answerDisplay.innerHTML = "Het getal is te laag"
    }
    else {
        answerDisplay.innerHTML = Number(first) + Number(second);
    }
}
function minus() {
    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    if (first == 0 && second == 0) {
        answerDisplay.innerHTML = "Het getal is te laag"
    }
    else {
        answerDisplay.innerHTML = first - second;
    }
}
function multiply() {
    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    if (first == 0 && second == 0) {
        answerDisplay.innerHTML = "Het getal is te laag"
    }
    else {
        answerDisplay.innerHTML = first * second;
    }
}
function divide() {
    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    if (first == 0 && second == 0) {
        answerDisplay.innerHTML = "Het getal is te laag"
    }
    else {
        answerDisplay.innerHTML = first / second;
    }
}
