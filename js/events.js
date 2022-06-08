import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  soundOnButton,
  soundOffButton,
  slider
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.pause();
    sound.pressButton();
  });

  stopButton.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  soundOnButton.addEventListener("click", () => {
    soundOnButton.classList.add("hide");
    soundOffButton.classList.remove("hide");
    sound.bgAudio.pause();
  });

  soundOffButton.addEventListener("click", () => {
    soundOnButton.classList.remove("hide");
    soundOffButton.classList.add("hide");
    sound.bgAudio.play();
  });

  setButton.addEventListener("click", () => {
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  slider.oninput = () => {
    sound.soundControl(slider.value);
  };
}
