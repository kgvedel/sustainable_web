//1 grib submit
//2 preventDefault
//læse url fra bruger
//fetch fra lokal fil

//Det overstående er klaret

//vi mangler: Clone, åbne nyt site ved calculate og forms

const form = document.querySelector("form.calculator");
const user_url = form.elements.url.value;

form.addEventListener("submit", calculate);

function calculate(event) {
    /* fetch("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + user_url).then(res => res.json()).then(console.log); */
    fetch("https://kea-alt-del.dk/websitecarbon/site/?url=" + user_url).then(res => res.json()).then(console.log);
    event.preventDefault();
    /* showDetails(); */
    /* console.log("test" + user_url); */
}

/* function showDetails(){
    location.href = "resolve.html";
    
}
 */

