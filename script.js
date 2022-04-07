//1 grib submit
//2 preventDefault
//løse url fra bruger
//fetch fra lokal fil

const submit_btn = document.querySelector(".calc_btn");
submit_btn.addEventListener("submit", calculate);

function calculate(){
    }

fetch("kea.json").then(res=>res.json()).then(console.log);
