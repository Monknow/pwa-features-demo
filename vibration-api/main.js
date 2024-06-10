import "./../style.css";

const vibrateButton = document.querySelector("#vibrate-button");
const stopVibrateButton = document.querySelector("#stop-vibrate-button");
const millisecondsInput = document.querySelector("#milliseconds-input");

vibrateButton.addEventListener("click", () => {
	navigator.vibrate(millisecondsInput.value);
});

stopVibrateButton.addEventListener("click", () => {
	navigator.vibrate(0);
});
