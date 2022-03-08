const menuItems = [
    {
        name: 'Home',
        src: './index.html'
    },
    {
        name: 'Menu1',
        src: '#'
    },
    {
        name: 'Leo',
        src: '#'
    },
    {
        name: 'Karina',
        src: '#'
    }

];

const withTypes = {
        medium: 550,
        large: 800
}

function changeClass() {
    const hamburger = document.querySelector("#hamburger");
    console.log("hamburger", hamburger);
    if (hamburger == null) {
        const burgerCont = document.querySelector("#hamburgerContainer");
        burgerCont.innerHTML = "";
        const liElement = document.createElement("li");
        liElement.setAttribute('id', 'hamburger');
        liElement.setAttribute('onclick', "changeClass()");
        const aElement = document.createElement("a");
        aElement.innerHTML = '&#9776;';
        liElement.appendChild(aElement);
        burgerCont.appendChild(liElement);

    } else {
        const burgerCont = document.querySelector("#hamburgerContainer");
        burgerCont.innerHTML = "";
        divImage = document.createElement("div");
        closeImage = document.createElement("img");
        closeImage.setAttribute('src', 'images/cancel.svg');
        closeImage.setAttribute('onclick', "changeClass()");
        divImage.appendChild(closeImage);
        burgerCont.appendChild(divImage);
    }

    const menu = document.querySelector("#menuid");
    if (menu.innerHTML == "") {
        addNav(menu);
    } else {
        menu.innerHTML = "";
    }

}

function addNav(menu) {
        console.log("menu in addMenu(): ", menu);
        const menulist = document.createElement("ul");
        menuItems.forEach(element => {
            let listitem = document.createElement("li");
            let linkElement = document.createElement("a");
            linkElement.innerHTML = `${element.name}`;
            linkElement.setAttribute('href', element.src);
            listitem.appendChild(linkElement);
            menulist.appendChild(listitem);
        });
        menu.appendChild(menulist);
}

function menuLargeView(){  
    const mainWith = window.innerWidth;
    if (mainWith > withTypes.large) {
        const menu = document.querySelector("#menuid");
        if (menu.innerHTML == "") {
            changeClass();
        }
    }
}

function pageDates() {
    try {
        let todayDate = new Date();
        const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(todayDate);
        console.log("fulldateUK: ", fulldateUK);
        let message = `${fulldateUK}`;
        const dateContainer = document.querySelector("#timeDiv");
        dateContainer.innerHTML = message;

        const updated = document.lastModified;
        const pUpdate = document.querySelector('#lastUpdate');
        message = `Last Modification ${updated}`;
        pUpdate.innerHTML = message;
    
    
        let fullYear = todayDate.getFullYear();
        const pYear = document.querySelector('#completeYear');
        message = `&#169; ${fullYear} Chile Green Chamber`;
        pYear.innerHTML = message;

    } catch(err) {
        alert(err.message);
        console.log(err.message);
    }
}


pageDates();
window.addEventListener("resize", menuLargeView);
menuLargeView();

function calculateWindChill(tempF, speed) {
    let factor = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    factor = Math.round(factor * 10)/10;
    if (tempF <= 50 && speed > 3) {
        return factor;
    } else {
        return "N/A";
    }   
}

const test = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=458de035db81e3515f9be6da6ed7a6cc&units=imperial';
const urlLink = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=10d779ad423d396cdcffa6696f58adce&units=imperial';

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