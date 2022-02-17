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
pageDates();
window.addEventListener("resize", menuLargeView);
menuLargeView();