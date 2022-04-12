


function start(){
    loadData();
}




const APIKEY = "625474ee67937c128d7c96d6";
const endpoint = "https://sustainable-485c.restdb.io/rest/company";

function loadData() {
    
        fetch(endpoint, {
            method: "get",
            headers: {
              "x-apikey": APIKEY,
            },
          })
            .then((e) => e.json())
            .then((e) => console.log(e))
            .then((e) => displayList(e));
    
}



function displayList(data) {
    console.log(data);
    //clearing the list
    document.querySelector("#list tbody").innerHTML = "";
  displayData(data);
 
    console.log(allData);
    


}

function displayData(siteData) {
    const clone = document.querySelector("#carbon_template").content.cloneNode(true);

    clone.querySelector("[data-field=energy]").textContent = siteData.energy;
    clone.querySelector("[data-field=co2]").textContent = siteData.co2 + " grams";
    clone.querySelector("[data-field=green]").textContent = siteData.green;
    clone.querySelector("[data-field=performance]").textContent = siteData.performance;
    clone.querySelector("[data-field=timing]").textContent = siteData.timing;
    clone.querySelector("[data-field=overall_loading_experience]").textContent = siteData.overall_loading_experience;



    document.querySelector("#list tbody").appendChild(clone);

}
start();


  