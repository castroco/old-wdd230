const test = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=458de035db81e3515f9be6da6ed7a6cc&units=imperial';
const urlLink = 'https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=10d779ad423d396cdcffa6696f58adce&units=imperial';

fetch(urlLink)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log("jsObject: \n",jsObject);
            const weatherContainer = document.getElementById('weather');
            const title = document.createElement("h2");
            title.textContent = "Weather";

            const temperature = document.createElement("p");
            temperature.textContent = `Temperature: ${jsObject.main.temp}`;

            const condition = document.createElement("p");
            condition.textContent = `Condition: ${jsObject.weather[0].description}`;

            const weatherImg = document.createElement("img");
            weatherImg.src = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;

            const windSpeed = document.createElement("p");
            windSpeed.textContent = `Wind Speed: ${jsObject.wind.speed}`;

            const windChillValue = calculateWindChill(jsObject.main.temp, jsObject.wind.speed);
            console.log("windChillValue: ", windChillValue);
            const windChill = document.createElement("p");
            windChill.textContent = `Wind Chill: ${windChillValue}`;
            
            weatherContainer.appendChild(title);
            weatherContainer.appendChild(temperature);
            weatherContainer.appendChild(condition);
            weatherContainer.appendChild(weatherImg);
            weatherContainer.appendChild(windSpeed);
            weatherContainer.appendChild(windChill);
        }
    )
;