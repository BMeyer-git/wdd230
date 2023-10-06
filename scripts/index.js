const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
	visitsDisplay.textContent = "This is your first visit. Congratulations!";
} else {
	visitsDisplay.textContent = "Page Visits: " + numVisits;
}

numVisits++;


localStorage.setItem("numVisits-ls", numVisits);