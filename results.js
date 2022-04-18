




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
 getData();

}

//const form = document.querySelector("#calculator");





const APIKEY = "625474ee67937c128d7c96d6";
const endpoint = "https://sustainable-485c.restdb.io/rest/company";

async function getData() {
 // const url = form.elements.url.value;  /* get url from other script!!!!!*/

  //console.log(url);
 
 
 

  const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
  //const pageSpeed = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${pageInsightApiKey}`;

 // const websiteCarbon = `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`;



  const requestPage = await fetch("page.json");
  const pageData = await requestPage.json();


  const requestCarbon = await fetch("kea.json");
  const carbonData = await requestCarbon.json();


  const result = prepareObject(carbonData, pageData);
  console.log(result);

  post(result);
  displayList(result);


  



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
// siteData.section = form.elements.select_industry.value; import this from other script


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
    .then((data) => console.log(data));
}




function displayList(data) {
    console.log(data);
    //clearing the list
   // document.querySelector("#your_result #list ").innerHTML = "";
  displayData(data);
 
    

}

function displayData(siteData) {
    const clone = document.querySelector("#carbon_template").content.cloneNode(true);

    clone.querySelector("[data-field=energy]").textContent = siteData.energy;
    clone.querySelector("[data-field=co2]").textContent = siteData.co2 + " grams";
    clone.querySelector("[data-field=green]").textContent = siteData.green;
    clone.querySelector("[data-field=performance]").textContent = siteData.performance;
    clone.querySelector("[data-field=timing]").textContent = siteData.timing;
    clone.querySelector("[data-field=overall_loading_experience]").textContent = siteData.loading_experience;



    document.querySelector("#your_result #list tbody").appendChild(clone);

}



  