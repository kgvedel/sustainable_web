




const allData = [];

const dataCarbon = {
  web_url: "url",
  site_name: "name",
  energy: "",
  co2: "",
  green: false,
  performance: "",
  timing: "",
  loading_experience: "",
  section: ""
};


const industry = localStorage.getItem("industry");
const url = localStorage.getItem("url");

window.addEventListener('DOMContentLoaded', start);
function start() {
  getData();

}








const APIKEY = "625474ee67937c128d7c96d6";
const endpoint = "https://sustainable-485c.restdb.io/rest/company";

async function getData() {





  const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
  const pageSpeed = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${pageInsightApiKey}`;

  const websiteCarbon = `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`;



  const requestPage = await fetch("fb-pagespeed.json");
  const pageData = await requestPage.json();


  const requestCarbon = await fetch("fb-carbon.json");
  const carbonData = await requestCarbon.json();

  console.log(carbonData);
  console.log(pageData);
  const result = prepareObject(carbonData, pageData);
  console.log(result);

  post(result);

}


function prepareObject(jsonDataC, jsonDataP) {
  const siteData = Object.create(dataCarbon);

  const siteUrl = jsonDataC.url;
  let company;
  const firstDot = siteUrl.indexOf(".");
  const firstlines = siteUrl.indexOf("/");
  const secondDot = siteUrl.lastIndexOf(".");
  if (siteUrl.includes("www.")) {

    company = siteUrl.substring(firstDot + 1, secondDot);
  } else if ("://") {
    company = siteUrl.substring(firstlines + 2, secondDot);

  }
  else {
    company = siteUrl.substring(0, firstDot);
  }
  siteData.site_name = company.charAt(0).toUpperCase() + company.slice(1)
  siteData.performance = jsonDataP.lighthouseResult.categories.performance.score;
  siteData.timing = jsonDataP.lighthouseResult.timing.total;
  siteData.loading_experience = jsonDataP.loadingExperience.overall_category;
  siteData.web_url = siteUrl;

  siteData.energy = jsonDataC.statistics.energy;
  siteData.co2 = jsonDataC.statistics.co2.grid.grams;
  siteData.green = jsonDataC.green;
  siteData.section = industry;

  

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
    .then((data) => displayList(data));
}




function displayList(data) {

  //clearing the list
  // document.querySelector("#your_result #list ").innerHTML = "";
  displayData(data);



}

function displayData(siteData) {
  const clone = document.querySelector("#carbon_template").content.cloneNode(true);
  const end_card = document.querySelector(".the_end_card");

  clone.querySelector("[data-field=energy]").textContent = siteData.energy;
  clone.querySelector("[data-field=co2]").textContent = siteData.co2 + " grams";
  clone.querySelector("[data-field=green]").textContent = siteData.green;
  clone.querySelector("[data-field=performance]").textContent = siteData.performance;
  clone.querySelector("[data-field=timing]").textContent = siteData.timing;
  clone.querySelector("[data-field=overall_loading_experience]").textContent = siteData.loading_experience;

  end_card.querySelector("[data-field=company]").textContent = siteData.site_name;
  end_card.querySelector("[data-field=performance]").textContent = siteData.performance;
  end_card.querySelector("[data-field=overall_loading_experience]").textContent = siteData.loading_experience;
  end_card.querySelector("[data-field=timing]").textContent = siteData.timing;
  end_card.querySelector("[data-field=energy]").textContent = siteData.energy;
  end_card.querySelector("[data-field=co2]").textContent = siteData.co2;
  if (siteData.green == true) {
    end_card.querySelector("[data-field=green]").textContent = "Green";
  } else {
    end_card.querySelector("[data-field=green]").textContent = "Not green";

  }


  document.querySelector("#your_result #list tbody").appendChild(clone);



}



