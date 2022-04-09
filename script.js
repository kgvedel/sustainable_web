//1 grib submit
//2 preventDefault
//læse url fra bruger
//fetch fra lokal fil

//Det overstående er klaret

//vi mangler: Clone, åbne nyt site ved calculate og forms
const form = document.querySelector("form.calculator");
const allData = [];
const dataCarbon = {
    energy: "",
    co2: "",
    green: true
   
};

function start(){
    form.addEventListener("submit", calculate);
}



const user_url = form.elements.url.value;

function calculate(event) {
   
  /*   
    const pageInsightApiKey = "AIzaSyB5TMLidzXZG4KFFbQjWVmGv1bfUYPrDGg";
  let pageSpeed =  fetch( `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${user_url}&key=${pageInsightApiKey}`).then(res => res.json()).then(console.log); */
    
  event.preventDefault();
  loadJsonCarbon();
}

function loadJsonCarbon(){
    fetch(`kea.json`).then(res => res.json()).then(jsonData =>{prepareObjects(jsonData)});
 
   /*  fetch(`https://kea-alt-del.dk/websitecarbon/site/?url=${user_url}`).then(res => res.json()).then(console.log);
 */
}


function prepareObjects(jsonObject){
   
        const carbon = Object.create(dataCarbon);

carbon.energy = jsonObject.statistics.energy;
carbon.co2 = jsonObject.statistics.co2;
carbon.green = jsonObject.green;


        console.log(carbon);

allData.push(carbon);
console.log(allData);
}


start();

function displayList(){
//clearing the list
   document.querySelector("#list tbody").innerHTML= "";
   allData.forEach(displayData);

}

function displayData(carbon){
    const clone = document.querySelector("template #carbon_template").content.cloneNode(true);

    clone.querySelector("[data-field=energy]").textContent = carbon.energy;
    clone.querySelector("[data-field=co2]").textContent = carbon.co2;
    clone.querySelector("[data-field=green]").textContent = carbon.green;

    console.log

    document.querySelector("#list tbody").appendChild(clone);

}

/* function showDetails(){
    location.href = "resolve.html";
    
}
 */
