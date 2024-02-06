// Stopwatch functionality
let startTime;
let elapsedTime = 0;
let timerInterval;

function updateStopwatch() {
  const elapsedTimeString = formatTime(elapsedTime);
  document.getElementById("stopwatch").textContent = elapsedTimeString;
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor(time % 1000);

  return (
    pad(hours, 2) + ":" +
    pad(minutes, 2) + ":" +
    pad(seconds, 2) + "." +
    pad(milliseconds, 3)
  );
}

function pad(value, length) {
  return value.toString().padStart(length, "0");
}

// Event listeners
document.getElementById("startBtn").addEventListener("click", function() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      updateStopwatch();
    }, 10);
  }
});

document.getElementById("pauseBtn").addEventListener("click", function() {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateStopwatch();
});

document.getElementById("lapBtn").addEventListener("click", function() {
  const lapTimeItem = document.createElement("li");
  lapTimeItem.textContent = formatTime(elapsedTime);
  document.getElementById("lapTimes").appendChild(lapTimeItem);
});
