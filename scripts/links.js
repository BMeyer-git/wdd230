const baseURL = "https://bmeyer-git.github.io/wdd230/";
const linksURL = "https://bmeyer-git.github.io/wdd230/data/links.json";



const activities = document.querySelector('#activities');

let results = null;

async function getLinks() {
    const response = await fetch(linksURL);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayLinks(data.weeks);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let li = document.createElement("li");
        li.textContent = week.week + ": ";

        week.links.forEach((link) =>{
            let anchor = document.createElement("a");
            anchor.setAttribute("href",link.url);
            anchor.textContent = link.title;
            li.appendChild(anchor);
        })

        activities.appendChild(li);
    });
}

getLinks();