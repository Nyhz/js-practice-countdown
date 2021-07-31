// Change this to change countdown target.
const countdownTarget = '1 Jan 2022';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const targetDate = new Date(countdownTarget);
    const currentDate = new Date();

    const totalSeconds = (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

// Function to add a '0' in front of single digit numbers.
function formatTime(time) {
    if (time < 10) {
        return (`0${time}`)
    } else {
        return time
    }
}

countdown();
setInterval(countdown, 1000);



