const today = new Date();

const banner = document.querySelector("#banner");

console.log(today.getDay());

const closeButton = document.querySelector("#close");

closeButton.addEventListener("click", () => {
    banner.classList.toggle("dark");
    if (closeButton.textContent.includes("☑️")) {
		banner.display = "none";
		banner.style.color = "#fff";

		closeButton.textContent = "";
        banner.textContent = "";
	}
});


if (today.getDay() > 0 && today.getDay < 4) {
    closeButton.textContent = "☑️";
    let bannerText = document.createElement("h1");
    bannerText.textContent = "Don't forget the Meet & Greet every Wednesday @7:00PM!";
    banner.appendChild(bannerText);
}

