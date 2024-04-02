let timer;
let timeLeft;
let isRunning = false;

const hourBtn = document.getElementById('hour-btn');
const halfHourBtn = document.getElementById('half-hour-btn');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('time-left');

function startTimer(duration) {
    const startTime = Date.now();
    const endTime = startTime + duration * 60 * 1000;

    timer = setInterval(() => {
        const now = Date.now();
        timeLeft = Math.round((endTime - now) / 1000);

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = "00:00";
            setTimeout(() => {
                alert("It's time for a break!");
            }, 1000);
            return;
        }

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timerDisplay.textContent = "00:00";
}

hourBtn.addEventListener('click', () => {
    if (!isRunning) {
        resetTimer();
        startTimer(55);
    }
});

halfHourBtn.addEventListener('click', () => {
    if (!isRunning) {
        resetTimer();
        startTimer(25);
    }
});

startBtn.addEventListener('click', () => {
    isRunning = true;
    startTimer(timeLeft / 60);
});

stopBtn.addEventListener('click', () => {
    isRunning = false;
    stopTimer();
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    resetTimer();
});
