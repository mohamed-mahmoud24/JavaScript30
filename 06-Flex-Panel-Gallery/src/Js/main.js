const panels = document.querySelectorAll('.panel');

const toggleOPen = function () {
    this.classList.toggle('open');
};

const toggleActive = function (e) {
    if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
};

panels.forEach(panel => panel.addEventListener('click', toggleOPen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
