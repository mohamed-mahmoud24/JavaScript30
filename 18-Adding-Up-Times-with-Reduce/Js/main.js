const timeNodes = [...document.querySelectorAll('[data-time]')];
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        [min, sec] = timeCode.split(':').map(parseFloat);
        return min * 60 + sec;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${minutes}:${secondsLeft}`);
