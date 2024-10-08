const output = document.getElementById("output");
let shop = [];
function add_product() {
    const input = document.getElementById("text");
    let product = input.value;
    shop.push(product);
    output.innerHTML = shop.join(', ');
}