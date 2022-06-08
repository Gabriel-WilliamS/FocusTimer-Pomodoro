import Sound from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let minutes = minutesDisplay.textContent;
      let seconds = secondsDisplay.textContent;
      let isFinished = minutes <= 0 && seconds <= 0;

      if (isFinished) {
        resetControls();
        updateDisplay();
        Sound().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;

        --minutes;
      }

      updateDisplay(minutes, seconds - 1);

      countdown();
    }, 1000);
  }

  function pause() {
    clearTimeout(timerTimeOut);
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    pause
  };
}
