

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
const form = document.querySelector("#calculator");



window.addEventListener('DOMContentLoaded',start);
function start(){
  
  form.addEventListener("submit", calculate);

}





function calculate(event) {

    event.preventDefault();

    const url = form.elements.url.value;
    const industry = form.elements.select_industry.value;

console.log(industry);

    localStorage. setItem("url", url);
    localStorage. setItem("industry", industry);

   location.href = "resolve.html";

}



