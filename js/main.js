function getYear() {
    let todayDate = new Date();
    let year = todayDate.getFullYear();
    return year;
}

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