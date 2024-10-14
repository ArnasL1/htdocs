const block = document.getElementById("block");
let i = 0;
setInterval(() => {
    i += 10;
    let position = i + "px";
    block.style.left = position;
    let width = window.innerWidth;
    if (i > width) {
        i = 0;
    }
}, 100);