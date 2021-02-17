const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokestyle = "#2c2c2c";
ctx.linewidth = 2.5;

let painting = false;

function onMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.offsetX + rect.left;
    const y = event.offsetY + rect.top;

    console.log(x, y);

    // console.log(event)
    
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting(event) {
    painting = true;
    // console.log("painting:",event.offsetX, event.offsetY);
}

function stopPainting() {
    painting = false;
}

function onMouseDown(event) {
    painting = true;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}