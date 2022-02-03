const menuItems = ["home", "menu1", "menu2"];

function changeClass() {
    /*document.querySelector("#menuid").classList.toggle("menuHidden");*/
    const menu = document.querySelector("#menuid");
    console.log("menu: ", menu);
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