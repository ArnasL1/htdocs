const block = document.getElementById("block");
let i = 0;
setInterval(() => {
    i += 10;
    let position = i + "px";
    let width = window.innerWidth;
        block.style.left = position;
    if (i > width) {
        i = 0;
    }
}, 100);