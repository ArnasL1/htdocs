const amount = document.getElementById("amount");
const content = document.getElementById("content");
const fourth = document.getElementById("fourth");
const opdracht6 = document.getElementById("opdracht6");
const drop = document.getElementById("drop");
let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
//Opdracht 1
content.innerHTML = winkelmand.join(", ");
// Opdracht 2
amount.innerHTML = winkelmand.length;
// Opdracht 3
fourth.innerHTML = winkelmand[3];
// Opdracht 4
winkelmand[1] = "Bier";
document.getElementById("bier").innerHTML = winkelmand.join(", ");
// Opdracht 5
function product_toevoegen() {
  winkelmand.push("Soep");
  content.innerHTML = winkelmand.join(", ");
}
// Opdracht 6
if (winkelmand.length > 1) {
  opdracht6.innerHTML = winkelmand.join(", ");
} else {
  opdracht6.innerHTML = "U heeft niet genoeg producten om te tonen.";
}
// Opdracht 7
if (winkelmand[4] === "Drop") {
  drop.innerHTML = winkelmand.join(", ");
} else {
  drop.innerHTML = "U heeft geen drop";
}
// Opdracht 8
document.getElementById("spaces").innerHTML = winkelmand.join(" ");
// Opdracht 9
document.getElementById("old").innerHTML = winkelmand.join(", ");
winkelmand.splice(0, 2);
document.getElementById("new").innerHTML = winkelmand.join(", ");
// Opdracht 10
document.getElementById("sorter").innerHTML = winkelmand.sort().join(", ");
