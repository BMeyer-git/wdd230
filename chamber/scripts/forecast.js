
const forecast = document.querySelector('#forecast');
const resultsPerDay = 8
const days = 3;



const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=boise,id,us&appid=9c5bc618575c67d72aa055c144fc35f0&units=imperial";

async function apiFetch() {
    
    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const data = await response.json();
            displayForecast(data.list);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

function displayForecast(list) {

    let count = 0;

    list.forEach((projection) => {
        if (count % resultsPerDay == 0 && (count / resultsPerDay) <= days && count !=0) {
            let sec = document.createElement("section");
            
            let date = new Date();
            date.setDate(date.getDate() + count / 8)
            sec.textContent = "Day: " + date.getDate();

            let p = document.createElement("p");
            p.textContent = projection.main.temp + " degrees F";
            sec.appendChild(p);

            let span = document.createElement("span");
            span.textContent = projection.weather[0].description;
            sec.appendChild(span);

            forecast.appendChild(sec);
            count++;
        }
        else {
            count++;
        }
        
    });
}

apiFetch();