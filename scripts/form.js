const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.display = "block";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value ;
}
