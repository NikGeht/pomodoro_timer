const startButton = document.querySelector('#pomodoro-start');
const breakButton = document.querySelector('#pomodoro-break');
const stopButton = document.querySelector('#pomodoro-stop');
const pomodoroTimer = document.querySelector('#pomodoro-timer');
const pomodoroContainer = document.querySelector('#body');
let currentTimeLeftInSession = 1500;
let clockTimer;
let isClockRunning = false;
// START
startButton.addEventListener('click', () => {
 toggleClock();
})

// PAUSE
breakButton.addEventListener('click', () => {
  pomodoroContainer.classList.add('bg-green');
  currentTimeLeftInSession = 300;
  clockTimer = setInterval(() => {
    currentTimeLeftInSession--;
    if (currentTimeLeftInSession === 0) {
      clearInterval(clockTimer);
      isClockRunning = false;
      currentTimeLeftInSession = 1500;
      displayCurrentTimeLeftInSession();
      pomodoroContainer.classList.remove('bg-green');
      
    }

    displayCurrentTimeLeftInSession();
  }, 1000)
  isClockRunning = true;
  
})

// STOP
stopButton.addEventListener('click', () => {
 toggleClock(reset=true);
  pomodoroContainer.classList.remove('bg-green');
  currentTimeLeftInSession = 1500;
  displayCurrentTimeLeftInSession();
})

const toggleClock = (reset) => {
 if (reset) {
   // Stop the clock
   clearInterval(clockTimer);
   isClockRunning = false;
   currentTimeLeftInSession = currentTimeLeftInSession;
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
 result += `${addLeadingZeroes(minutes)} : ${addLeadingZeroes(seconds)}`
  
 pomodoroTimer.innerText = result.toString();
}

