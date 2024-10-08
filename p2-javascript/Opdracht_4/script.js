const text = document.getElementById("text");
const verlanglijst = ["sokken", "kolen", "boeken", "cadeaubon", "geld"];
for (let x in verlanglijst) {
    text.innerHTML += verlanglijst[x] + "<br>";
}