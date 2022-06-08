import Timer from "./timer.js";
import Controls from "./controls.js";
import Sound from "./sounds.js";
import Events from "./events.js";

import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";

const controls = Controls({
  stopButton,
  pauseButton,
  playButton,
  setButton
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const sound = Sound();

Events({ controls, timer, sound });
