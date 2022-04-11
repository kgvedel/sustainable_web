


function start(){
    showDetails();
}


function showDetails(){
    loadJsonCarbon();
    
}

//   form.addEventListener("submit", calculate);

// const user_url = form.elements.url.value;



function loadJsonCarbon() {
    fetch(`kea.json`).then(res => res.json()).then(jsonData => { prepareCarbonObjects(jsonData) });
    fetch(`page.json`).then(res => res.json()).then(jsonData => { preparePageObjects(jsonData) });


    /*  fetch(`https://kea-alt-del.dk/websitecarbon/site/?url=${user_url}`).then(res => res.json()).then(console.log);
  */
}


//lighthouseResult.categories.performance.score 
//lighthouseResult.timing
//lighthouseResult.audits.uses-responsive-images
//loadingExperience.overall_category

/* function preparePageObjects(jsonObject) {

    const carbon = Object.create(dataCarbon);


    carbon.performance = jsonObject.lighthouseResult.categories.performance.score;
    carbon.timing = jsonObject.lighthouseResult.timing.total;
    carbon.overall_loading_experience = jsonObject.loadingExperience.overall_category;



    

    allData.push(carbon);

    displayList();
}


function prepareCarbonObjects(jsonObject) {

    const carbon = Object.create(dataCarbon);

    carbon.energy = jsonObject.statistics.energy;
    carbon.co2 = jsonObject.statistics.co2.grid.grams;
    carbon.green = jsonObject.green;


    

    allData.push(carbon);
    

    displayList();
}
 */


function displayList() {
    //clearing the list
    document.querySelector("#list tbody").innerHTML = "";
   allData.forEach(displayData);
 
    console.log(allData);
    


}

function displayData(carbon) {
    const clone = document.querySelector("#carbon_template").content.cloneNode(true);

    clone.querySelector("[data-field=energy]").textContent = carbon.energy;
    clone.querySelector("[data-field=co2]").textContent = carbon.co2 + " grams";
    clone.querySelector("[data-field=green]").textContent = carbon.green;
    clone.querySelector("[data-field=performance]").textContent = carbon.performance;
    clone.querySelector("[data-field=timing]").textContent = carbon.timing;
    clone.querySelector("[data-field=overall_loading_experience]").textContent = carbon.overall_loading_experience;



    document.querySelector("#list tbody").appendChild(clone);

}
start();


  