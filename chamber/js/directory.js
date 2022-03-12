const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL).then(function (response) {
    return response.json();
})
    .then(function (jsonObject) 
        {
            console.log("jsonObject: ", jsonObject);
            const prophets = jsonObject['prophets'];
            console.log("prophets: ", prophets);
            prophets.forEach(displayProphets);
        }
    );

function displayProphets(prophet) {  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let image = document.createElement('img');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname}-${prophet.order}`);
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
    const myTrip = {
        "month":"July",
        "year":"2015",
         "temples": ["Logan", "Bountiful", "Manti", "Draper", "St. George", "Cedar City" ]
    }
    let x = myTrip.temples[3];
    console.log("x: ", x);
}