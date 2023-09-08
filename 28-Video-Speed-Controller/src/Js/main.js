const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

const handleMove = function (e) {
    if (!isDown) return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
};

speed.addEventListener('mousemove', handleMove);
speed.addEventListener('mousedown', () => (isDown = true));
speed.addEventListener('mouseup', () => (isDown = false));
speed.addEventListener('mouseleave', () => (isDown = false));
