//1 grib submit
//2 preventDefault
//læse url fra bruger
//fetch fra lokal fil

//Det overstående er klaret

//vi mangler: Clone, åbne nyt site ved calculate og forms
const form = document.querySelector("#calculator");

//import{loadJsonCarbon.from}



 form.addEventListener("submit", calculate);

// const user_url = form.elements.url.value;

function calculate(event) {


    /*   
      const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
    let pageSpeed =  fetch( `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${user_url}&key=${pageInsightApiKey}`).then(res => res.json()).then(console.log); */

    event.preventDefault();
   
    location.href = "resolve.html";

    
}


