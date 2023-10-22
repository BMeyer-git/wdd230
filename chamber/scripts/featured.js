const baseURL = "https://bmeyer-git.github.io/wdd230/chamber";
const membersURL = "https://bmeyer-git.github.io/wdd230/chamber/data/members.json";

let results = null;

const feature1 = document.querySelector("#spotlight1");
const feature2 = document.querySelector("#spotlight2");

function notBronze(member) {
    return member.membershipLevel != "Bronze"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getMembers() {
    const response = await fetch(membersURL);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayFeatured(data.members);
    }
}

function displaySingleMember(member, destination) {
    let sec = document.createElement("section");
        
    let image = document.createElement("img");
    image.setAttribute("src",member.image);
    image.setAttribute("alt",("Picture of " + member.name));

    let h3 = document.createElement("h3");
    h3.textContent = member.name

    let address = document.createElement("p");
    address.textContent = member.address;

    let phone = document.createElement("p");
    phone.textContent = member.phone;

    let anchor = document.createElement("a");
    anchor.setAttribute("href",member.website);
    anchor.textContent = "Link to website";

    sec.appendChild(image);
    sec.appendChild(h3);
    sec.appendChild(address);
    sec.appendChild(phone)
    sec.appendChild(anchor);

    destination.appendChild(sec);
}

const displayFeatured = (members) => {

    let filtered = members.filter(notBronze);

    let randomNumber = getRandomInt(filtered.length)
    member1 = members[randomNumber];
    let lastValue = randomNumber;

    while (randomNumber == lastValue)
    {
        randomNumber = getRandomInt(filtered.length);
    }

    member2 = members[randomNumber];

    displaySingleMember(member1, feature1);
    displaySingleMember(member2, feature2);
}

getMembers();

