const directoryInfo = {
    "business": [
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/logos/scotia.svg", "address": "2134 Alameda Avenue ID 83646", "phone": "(308) 777-9132", "website": "https://https://www.scotiabankchile.cl"},
        {"logo": "./images/logos/gob.svg", "address": "4536 Gordon Avenue ID 84560", "phone": "(305) 654-4356", "website": "https://www.minsal.cl"},
        {"logo": "./images/araucana.svg", "address": "719 Alameda Avenue ID 54675", "phone": "(420) 994-4565", "website": "https://www.laaraucana.cl/"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"},
        {"logo": "./images/sii.jpg", "address": "4208 Park Avenue ID 83652", "phone": "(307) 754-4509", "website": "https://www.sii.cl"}
    ]
}


const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const jsonFile = "https://castroco.github.io/wdd230/chamber/data/directory.json";

fetch(jsonFile).then(function (response) {
    return response.json();
})
    .then(function (jsonObject) 
        {
            console.log("jsonObject: ", jsonObject);
            companies = directoryInfo['business'];
            console.log("companies: ", companies);
            companies.forEach(displayCompanies);
        }
    );

/*
companies = directoryInfo['business'];
console.log("companies: ", companies);
companies.forEach(displayCompanies);
*/

function displayCompanies(company) {  
    let card = document.createElement('section');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    
    website.textContent = `${company.website}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    image.setAttribute('src', company.logo);
    image.setAttribute('alt', `Logo of the company`);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    document.querySelector('div.cards').appendChild(card);
}