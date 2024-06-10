import "./../style.css";
import "./cube.css";

const currentAlpha = document.querySelector(".currentAlpha");
const currentBeta = document.querySelector(".currentBeta");
const currentGamma = document.querySelector(".currentGamma");

const cube = document.querySelector(".cube");

window.addEventListener("deviceorientation", (event) => {
	currentAlpha.textContent = event.alpha;
	currentBeta.textContent = event.beta;
	currentGamma.textContent = event.gamma;

	cube.style.transform = `rotateX(${event.beta}deg) rotateY(${event.gamma}deg) rotateZ(${event.alpha}deg)`;
});
