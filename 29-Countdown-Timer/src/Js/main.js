let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const displayTimeLeft = function (seconds) {
    const minutes = Math.floor(seconds / 60)
        .toString()
        .padStart(2, 0);
    const remaindseconds = (seconds % 60).toString().padStart(2, 0);
    const display = `${minutes}:${remaindseconds}`;
    document.title = display;
    timerDisplay.textContent = display;
};

const timer = function (seconds) {
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(() => {
        secondsLeft = Math.round((then - Date.now()) / 1000);
        displayTimeLeft(secondsLeft);
        if (secondsLeft < 1) clearInterval(countDown);
    }, 1000);
};

const displayEndTime = function (timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustHours = (hour > 12 ? hour - 12 : hour)
        .toString()
        .padStart(2, 0);
    const minutes = end.getMinutes().toString().padStart(2, 0);
    endTime.textContent = `Be Back At ${adjustHours}:${minutes}`;
};

buttons.forEach(button =>
    button.addEventListener('click', () => timer(button.dataset.time))
);

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    timer(this.minutes.value * 60);
    this.reset();
});
