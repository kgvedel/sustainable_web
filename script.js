

//vi mangler: Clone, åbne nyt siteData ved calculate og forms

//

const allData = [];

const dataCarbon = {
  web_url: "url",
  energy: "",
  co2: "",
  green: false,
  performance: "",
  timing: "",
  loading_experience: "",
  section:""
};



window.addEventListener('DOMContentLoaded',start);
function start(){
  form.addEventListener("submit", calculate);

}

const form = document.querySelector("#calculator");


function calculate(event) {

<<<<<<< HEAD
    event.preventDefault();
   
    /* location.href = "resolve.html"; */
=======
  event.preventDefault();
  getData();
>>>>>>> 362930ac7da9defba11095ed23d9e7469ffec672

}




const APIKEY = "625474ee67937c128d7c96d6";
const endpoint = "https://sustainable-485c.restdb.io/rest/company";

async function getData() {
  const url = form.elements.url.value;

  console.log(url);
 
 
 

  const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
  const pageSpeed = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${pageInsightApiKey}`;

  const websiteCarbon = `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`;



  const requestPage = await fetch("page.json");
  const pageData = await requestPage.json();


  const requestCarbon = await fetch("kea.json");
  const carbonData = await requestCarbon.json();


  const result = prepareObject(carbonData, pageData);
  console.log(result);

  post(result);



}


function prepareObject(jsonDataC, jsonDataP) {
  const siteData = Object.create(dataCarbon);
  siteData.performance = jsonDataP.lighthouseResult.categories.performance.score;
  siteData.timing = jsonDataP.lighthouseResult.timing.total;
  siteData.loading_experience = jsonDataP.loadingExperience.overall_category;
  siteData.web_url = jsonDataC.url;
  siteData.energy = jsonDataC.statistics.energy;
  siteData.co2 = jsonDataC.statistics.co2.grid.grams;
  siteData.green = jsonDataC.green;
 siteData.section = form.elements.select_industry.value;


  return siteData;

}





function post(postData) {

  postData = JSON.stringify(postData);

  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": APIKEY,
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then( location.href = "resolve.html");
}



