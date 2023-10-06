let copyright = document.querySelector("#copyright");
copyright.innerHTML = "©" + new Date().getFullYear();

let modifyrecord = document.querySelector("#lastModified");
modifyrecord.innerHTML = "Last Modification: " + document.lastModified;

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

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

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

});