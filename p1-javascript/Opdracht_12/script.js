const age = document.getElementById("age");
const modal = document.getElementById("modal");
const denied = document.getElementById("denied");
function checkAge() {
    if (age.value > 18) {
        modal.style.display = "none";
    }
    else {
        denied.style.display = "block";
    }
}
function displayModal() {
    modal.style.display = "block";
}