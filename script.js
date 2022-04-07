//1 grib submit
//2 preventDefault
//læse url fra bruger
//fetch fra lokal fil

const submit_btn = document.querySelector(".calc_btn");
const form = document.querySelector("form");
const user_url = form.elements.url.value;

form.addEventListener("submit", calculate);

function calculate(event) {
    event.preventDefault();
    console.log("test" + user_url);

}

fetch("kea.json").then(res => res.json()).then(console.log);
