const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let hue = 0;
direction = true;
ctx.lineWidth = 10;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = function (e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) hue = 0;

    if (ctx.lineWidth <= 1 || ctx.lineWidth >= 100) direction = !direction;
    direction ? ctx.lineWidth-- : ctx.lineWidth++;
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
