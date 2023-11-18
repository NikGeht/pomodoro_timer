const startButton = document.querySelector('#pomodoro-start');
const pauseButton = document.querySelector('#pomodoro-pause');
const stopButton = document.querySelector('#pomodoro-stop');
const pomodoroTimer = document.querySelector('#pomodoro-timer');
// START
startButton.addEventListener('click', () => {
 toggleClock();
})

// PAUSE
pauseButton.addEventListener('click', () => {
 toggleClock();
})

// STOP
stopButton.addEventListener('click', () => {
 toggleClock(reset=true);
})
let isClockRunning = false;
let currentTimeLeftInSession = 1500; // 25 minutes in seconds
let clockTimer;

const toggleClock = (reset) => {
 if (reset) {
   // Stop the clock
   clearInterval(clockTimer);
   isClockRunning = false;
   currentTimeLeftInSession = 1500;
    displayCurrentTimeLeftInSession();// Reset the timer
 } else {
   if (isClockRunning === true) {
     // Pause the clock
     clearInterval(clockTimer);
     isClockRunning = false;
   } else {
     // Start the clock
     clockTimer = setInterval(() => {
       currentTimeLeftInSession--;
       displayCurrentTimeLeftInSession();
     }, 1000);
     isClockRunning = true;
   }
 }
}

const displayCurrentTimeLeftInSession = () => {
 const secondsLeft = currentTimeLeftInSession;
 let result = '';
 const seconds = secondsLeft % 60;
 const minutes = parseInt(secondsLeft / 60) % 60;
 let hours = parseInt(secondsLeft / 3600);
 // add leading zeroes if it's less than 10
 function addLeadingZeroes(time) {
   return time < 10 ? `0${time}` : time
 }
 if (hours > 0) result += `${hours}:`
 result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
 pomodoroTimer.innerText = result.toString();
}

