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


const APIKEY = "6254481067937c128d7c96cc";
const endpoint = "https://sustainable-485c.restdb.io/rest/company ";

function post(payload) {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "x-apikey": APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => init());
}


