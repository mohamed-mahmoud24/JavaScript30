const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = function (e) {
    e.stopPropagation();
    console.log(this.classList.value);
};

divs.forEach(div => div.addEventListener('click', logText));

button.addEventListener(
    'click',
    () => console.log('It can only be clicked once'),
    {
        once: true,
    }
);
