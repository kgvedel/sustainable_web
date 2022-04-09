//1 grib submit
//2 preventDefault
//læse url fra bruger
//fetch fra lokal fil

//Det overstående er klaret

//vi mangler: Clone, åbne nyt site ved calculate og forms
const form = document.querySelector("form.calculator");

form.addEventListener("submit", calculate);

function calculate(event) {
    const user_url = form.elements.url.value;
    
    const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
  let pageSpeed =  fetch( `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${user_url}&key=${pageInsightApiKey}`).then(res => res.json()).then(console.log);
    
  let carbon =  fetch(`https://kea-alt-del.dk/websitecarbon/site/?url=${user_url}`).then(res => res.json()).then(console.log);
   event.preventDefault();
}

/* function showDetails(){
    location.href = "resolve.html";
    
}
 */
