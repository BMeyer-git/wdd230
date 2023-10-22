
const msToDays = 84600000;

const today = Date.now();

let lastVisit = window.localStorage.getItem("lastVisit") || null;

const welcomeElement = document.querySelector("#welcome");

if (lastVisit == null) {
	welcomeElement.textContent = "Welcome! Let us know if you have any questions.";
} else if ((today - lastVisit) / msToDays < 1) {
	welcomeElement.textContent = "Back so soon! Awesome!";
}
else{
    welcomeElement.textContent = "You last visited " + Math.floor((today - lastVisit) / msToDays) + " days ago.";
}

localStorage.setItem("lastVisit", today);