const block = document.getElementById("block");
let i = 0;
setInterval(() => {
    i += 10;
    let position = i + "px";
    block.style.left = position;
    if (i > 1470) {
        i = 0;
    }
}, 100);