

let copyright = document.querySelector("#copyright");
copyright.innerHTML = "©" + new Date().getFullYear();

let modifyrecord = document.querySelector("#lastModified");
modifyrecord.innerHTML = "Last Modification: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

const visitsDisplay = document.querySelector(".visits");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    main.classList.toggle("dark");
    if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";

		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
	visitsDisplay.textContent = "This is your first visit. Congratulations!";
} else {
	visitsDisplay.textContent = "Page Visits: " + numVisits;
}

numVisits++;


localStorage.setItem("numVisits-ls", numVisits);