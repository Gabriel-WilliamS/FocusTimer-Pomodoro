export default function Controls({
  playButton,
  pauseButton,
  stopButton,
  setButton
}) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    setButton.classList.add("hide");
    stopButton.classList.remove("hide");
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  function reset() {
    stopButton.classList.add("hide");
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
    setButton.classList.remove("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  };
}
