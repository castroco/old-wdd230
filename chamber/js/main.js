const menuItems = ["home", "menu1", "menu2", "menu4"];
const dayOfWeekLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

function changeClass() {
    const hamburger = document.querySelector("#hamburger");
    console.log("hamburger", hamburger);
    if (hamburger == null) {
        const burgerCont = document.querySelector("#hamburgerContainer");
        burgerCont.innerHTML = "";
        liElement = document.createElement("li");
        liElement.setAttribute('id', 'hamburger');
        liElement.setAttribute('onclick', "changeClass()");
        aElement = document.createElement("a");
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
    /*
    <li onclick="changeClass()"><a href="#">&#9776;</a></li>
    <img src="images/faceicon2.svg" alt=""></img> 
    .classList.toggle("menuHidden");
    */

    const menu = document.querySelector("#menuid");
    /*console.log("menu: ", menu);*/
    if (menu.innerHTML == "") {
        menuItems.forEach(element => {
            let titleElement = document.createElement("p");
            titleElement.innerHTML = element;
            menu.appendChild(titleElement);
        });
    } else {
        menu.innerHTML = "";
    }
}

function insertDate() {
    let todayDate = new Date();
    console.log("todayDate", todayDate);
    let year = todayDate.getFullYear();
    let month = todayDate.getMonth();
    let day = todayDate.getDate();
    let dayOfWeek = todayDate.getDay();
    let message = `${dayOfWeekLong[dayOfWeek-1]}, ${day} ${monthLong[month]} ${year}`;
    const dateContainer = document.querySelector("#timeDiv");
    dateContainer.innerHTML = message;

    /* Short way- Better way to format the date   */
    const fulldateUS = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(todayDate);
    const longdateUS = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(todayDate);
    const mediumdateUS = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(todayDate);
    const shortdateUS = new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(todayDate);

    const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(todayDate);
    const longdateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "long"}).format(todayDate);
    const mediumdateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "medium"}).format(todayDate);
    const shortdateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "short"}).format(todayDate);
    
    console.log("fulldate US: ", fulldateUS);
    console.log("longdate US: ", longdateUS);
    console.log("mediumdate US: ", mediumdateUS);
    console.log("shortdate US: ", shortdateUS);

    console.log("fulldate UK: ", fulldateUK);
    console.log("longdate UK: ", longdateUK);
    console.log("mediumdate UK: ", mediumdateUK);
    console.log("shortdate UK: ", shortdateUK);
}

/*
function addLine1 () {
    const yearContainer = document.querySelector("#line1");
    let message = `&#169; ${getYear()} .:|:. Carlos O. Castro .:|:. Chile`;
    yearContainer.innerHTML = message;
}
function addLine2 () {
    const updatedContainer = document.querySelector("#line2");
     document.lastModified;
    let message = `Last updated: ${document.lastModified}`;
    updatedContainer.innerHTML = message;
}


addLine1();
addLine2();
*/
insertDate();