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
    let menulist = document.createElement("ul");
    if (menu.innerHTML == "") {
        menuItems.forEach(element => {
            let listitem = document.createElement("li");
            let linkElement = document.createElement("a");
            linkElement.innerHTML = `${element.name}`;
            linkElement.setAttribute('href', element.src);
            listitem.appendChild(linkElement);
            menulist.appendChild(listitem);
        });
        menu.appendChild(menulist);
    } else {
        menu.innerHTML = "";
    }
}

function insertDate() {
    let todayDate = new Date();
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(todayDate);
    console.log("fulldateUK: ", fulldateUK);
    let message = `${fulldateUK}`;
    const dateContainer = document.querySelector("#timeDiv");
    dateContainer.innerHTML = message;
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