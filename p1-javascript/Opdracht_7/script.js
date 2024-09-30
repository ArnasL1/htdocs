const text = document.getElementById("text")
const budget = 100;
const product = 60;
if (budget >= product) {
    text.innerHTML = "U heeft genoeg geld!";
    text.style.color = "green";
}
else {
    text.innerHTML = "Helaas, te weinig geldt";
    text.style.color = "red";
}