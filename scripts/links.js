const baseURL = "https://bmeyer-git.github.io/wdd230/";
const linksURL = "https://bmeyer-git.github.io/wdd230/data/links.json";



const cards = document.querySelector('#cards');

let results = null;

async function getLinks() {
    const response = await fetch(linksURL);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        //displayProphets(data.prophets);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let sec = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement("h3");
        let birthPlace = document.createElement("h3");
        let portrait = document.createElement("img");
        
        fullName.textContent = prophet.name + " " + prophet.lastname;

        birthDate.textContent = "Date of Birth: " + prophet.birthdate;
        birthPlace.textContent = "Place of Birth: " + prophet.birthplace;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", "Portrait of " + prophet.name + " " + prophet.lastname);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        sec.appendChild(fullName);
        sec.appendChild(birthDate);
        sec.appendChild(birthPlace);
        sec.appendChild(portrait);

        cards.appendChild(sec);
    });
}

getLinks();