
function addUpdatedDate() {
    try {
        var dateUpdated = document.lastModified;
        const pObj = document.querySelector('#lastUpdated');
        let message = `Last updated ${dateUpdated}`;
        console.log(message);
        pObj.innerHTML = message;

        //geting the full year
        let day = new Date();
        let fullYear = day.getFullYear();
        const pObj2 = document.querySelector('#fullYear');
        let message2 = `&#169; | ${fullYear} | Carlos Castro | Santiago | <a href= "https://www.byui.edu/online">BYU Online Learning</a>`
        pObj2.innerHTML = message2;
    }
        catch(err) {
        alert(err.message);
        console.log(err.message);
    }
}
