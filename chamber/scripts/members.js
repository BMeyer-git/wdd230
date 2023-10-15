const baseURL = "https://bmeyer-git.github.io/wdd230/chamber";
const membersURL = "https://bmeyer-git.github.io/wdd230/chamber/data/members.json";



const directory = document.querySelector('#directory');

let results = null;

async function getMembers() {
    const response = await fetch(membersURL);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let sec = document.createElement("section");
        
        let image = document.createElement("img");
        image.setAttribute("src",member.image);
        image.setAttribute("alt",("Picture of " + member.name));

        let h3 = document.createElement("h3");
        h3.textContent = member.name

        let level = document.createElement("p");
        level.textContent = member.membershipLevel + " Member"
        level.setAttribute("class","membershipLabel")

        let address = document.createElement("p");
        address.textContent = member.address;

        let phone = document.createElement("p");
        phone.textContent = member.phone;

        let anchor = document.createElement("a");
        anchor.setAttribute("href",member.website);
        anchor.textContent = "Link to website";

        sec.appendChild(image);
        sec.appendChild(h3);
        sec.appendChild(level)
        sec.appendChild(address);
        sec.appendChild(phone)
        sec.appendChild(anchor);

        directory.appendChild(sec);
    });
}

getMembers();