const slider = document.querySelector('.items');
isDown = false;
let startX;
let startY;
let scrollLeft;
let pagex;
const toggleActive = function () {
    isDown ? slider.classList.add('active') : slider.classList.remove('active');
};

const start = function (e) {
    isDown = true;
    toggleActive();
    pagex = e.pageX || e.changedTouches[0].pageX;
    startX = pagex - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const end = function () {
    isDown = false;
    toggleActive();
};

const move = function (e) {
    if (!isDown) return;
    e.preventDefault();
    pagex = e.pageX || e.changedTouches[0].pageX;
    const x = pagex - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
};
slider.addEventListener('mousedown', start);
slider.addEventListener('touchstart', start);

slider.addEventListener('mouseleave', end);

slider.addEventListener('mouseup', end);
slider.addEventListener('touchend', end);

slider.addEventListener('mousemove', move);
slider.addEventListener('touchmove', move);
