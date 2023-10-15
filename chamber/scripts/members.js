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
        let li = document.createElement("li");
        li.textContent = "Company Name: " + member.name;
        


        directory.appendChild(li);
    });
}

getMembers();