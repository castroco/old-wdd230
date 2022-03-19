const jsonFile = "https://castroco.github.io/wdd230/chamber/data/directory.json";
cardsContainer = document.querySelector('div.cards');

fetch(jsonFile).then(function (response) {
    return response.json();
})
    .then(function (jsonObject) 
        {
            console.log("jsonObject: ", jsonObject);
            companies = jsonObject['business'];
            console.log("companiesaaaa: ", companies);
            companies.forEach(displayCompanies);
        }
    );

function displayCompanies(company) {  
    let card = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    
    name.textContent = `${company.name}`;
    website.textContent = `${company.website}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    image.setAttribute('src', company.logo);
    image.setAttribute('alt', `Logo of the company`);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    cardsContainer.appendChild(card);
}

const cardsButton = document.querySelector("#cardsIcon");
cardsButton.addEventListener("click", () => {
    cardsContainer.classList.replace("diplayList","displayCards");
});

const listButton = document.querySelector("#listIcon");
listButton.addEventListener("click", () => {
    cardsContainer.classList.replace("displayCards","diplayList");
});