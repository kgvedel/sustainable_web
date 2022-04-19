




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

const form = document.querySelector(".change_results");
const industry = localStorage.getItem("industry");
const url = localStorage.getItem("url");

window.addEventListener('DOMContentLoaded', start);
function start() {
  getData();

  form.addEventListener("input", updateData);
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


  const result = prepareObject(carbonData, pageData);
  console.log(result);



  post(result);
  return result;

}

const siteData = Object.create(dataCarbon);

function prepareObject(jsonDataC, jsonDataP) {

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

  siteData.energy = jsonDataC.statistics.energy.toFixed(5);
  siteData.co2 = jsonDataC.statistics.co2.grid.grams.toFixed(5);
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
  displayCard(data);


  

}

function updateData(){

  const imgSlider = form.elements.images.value;
  const imgType = form.elements.image_type.value;
  const headers = form.elements.headers.value;

console.log(headers);
/*best*/
if(imgSlider == 0 && imgType == "wepd" || headers == 0 && imgType == "wepd" ||imgSlider == 0 && headers == 0 ){
  siteData.performance= 0.99;
  siteData.energy = 0.00041;
  siteData.green = true;
  siteData.loading_experience = "FAST";
}

/* worst*/
else if(imgSlider == 1 && imgType == "png" || headers == 1 && imgType == "png" ||imgSlider == 1 && headers == 1 ){
  siteData.performance = 0.83;
  siteData.energy = 0.00073;
  siteData.green = false;
  siteData.loading_experience = "SLOW";

}/*good*/
else if(imgSlider== 0 || imgType == "wepd" || headers== 0 ){
  siteData.performance= 0.99;
  siteData.energy = 0.00045;
  siteData.green = true;
  siteData.loading_experience = "AVERAGE";
}
/*still very bad*/
else if(imgSlider == 1 && imgType == "jpeg" ||  headers == 1 && imgType == "jpeg"){
  siteData.performance = 0.84;
  siteData.energy = 0.00069;
  siteData.green = false;
  siteData.loading_experience = "SLOW";
}

/*ok*/
else if(imgSlider == 0.5 || imgType == "jpeg" ||  headers == 0.5){
  siteData.performance= 0.94;
  siteData.energy = 0.00059;
  siteData.green = true;
  siteData.loading_experience = "SLOW";

}/*quite bad*/
else if (imgSlider == 1 || imgType == "png" ||  headers == 1 ){
  siteData.performance = 0.88;
  siteData.energy = 0.00065;
  siteData.green = false;
  siteData.loading_experience = "SLOW";

}








displayCard(siteData);


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

function displayCard(siteData){
  const end_card = document.querySelector(".the_end_card");

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
  
}



