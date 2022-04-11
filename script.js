//1 grib submit
//2 preventDefault
//læse url fra bruger
//fetch fra lokal fil

//Det overstående er klaret

//vi mangler: Clone, åbne nyt site ved calculate og forms

const allData = [];

const dataCarbon = {
    web_url: "url",
    energy: "",
    co2: "",
    green: "",
    performance: "",
    timing: "",
    loading_experience: "smth",

};



const form = document.querySelector("#calculator");

 form.addEventListener("submit", calculate);

// const user_url = form.elements.url.value;

function calculate(event) {

  event.preventDefault();

   /*   const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
    let pageSpeed =  fetch( `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${user_url}&key=${pageInsightApiKey}`).then(res => res.json()).then(console.log); */

    /*  fetch(`https://kea-alt-del.dk/websitecarbon/site/?url=${user_url}`).then(res => res.json()).then(console.log);*/


   fetch(`kea.json`).then(res => res.json()).then(jsonData => { prepareCarbonObjects(jsonData) });
  fetch(`page.json`).then(res => res.json()).then(jsonData => { preparePageObjects(jsonData) }); 


  const carbon = Object.create(dataCarbon);
   function preparePageObjects(jsonObject) {
    carbon.performance = jsonObject.lighthouseResult.categories.performance.score;
    carbon.timing = jsonObject.lighthouseResult.timing.total;
    carbon.overall_loading_experience = jsonObject.loadingExperience.overall_category;
    
}


function prepareCarbonObjects(jsonObject) {
    carbon.energy = jsonObject.statistics.energy;
    carbon.co2 = jsonObject.statistics.co2.grid.grams;
    carbon.green = jsonObject.green;
}
 

  
   
   //  location.href = "resolve.html";

   allData.push(carbon);
 post(carbon);
  

    
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
    .then((data) => console.log(data));
}



