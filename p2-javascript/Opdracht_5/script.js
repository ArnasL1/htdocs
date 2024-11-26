const button = document.getElementById("submit-input");
const values = document.getElementById("table-values");
function tafel_van(input) {
  values.innerHTML = "<br>";
  for (let i = 0; i <= 10; i++) {
    values.innerHTML += `<br>${i} x ${input} = ${i * input}`;
  }
}
button.addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  tafel_van(userInput);
});
