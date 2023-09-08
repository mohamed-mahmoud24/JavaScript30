const pressed = [];
const secritCode = 'asdfgh';
window.addEventListener('keyup', e => {
    pressed.push(e.key);
    if (pressed.length > secritCode.length) pressed.shift();
    console.log(e.key);
    console.log(pressed);
    if (pressed.join('') === secritCode) {
        alert('You Win!');
    }
});
