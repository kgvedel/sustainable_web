import"./resolve.d8063fb6.js";const s={web_url:"url",site_name:"name",energy:"",co2:"",green:!1,performance:"",timing:"",loading_experience:"",section:""},i=document.querySelector(".change_results"),g=localStorage.getItem("industry");localStorage.getItem("url");window.addEventListener("DOMContentLoaded",u);function u(){y(),i.addEventListener("input",_)}const p="625474ee67937c128d7c96d6",f="https://sustainable-485c.restdb.io/rest/company";async function y(){const t=await(await fetch("fb-pagespeed.json")).json(),o=await(await fetch("fb-carbon.json")).json(),c=m(o,t);return console.log(c),x(c),c}const n=Object.create(s);function m(e,t){const r=e.url;let o;const c=r.indexOf("."),d=r.indexOf("/"),a=r.lastIndexOf(".");return r.includes("www.")?o=r.substring(c+1,a):o=r.substring(d+2,a),n.site_name=o.charAt(0).toUpperCase()+o.slice(1),n.performance=t.lighthouseResult.categories.performance.score,n.timing=t.lighthouseResult.timing.total,n.loading_experience=t.loadingExperience.overall_category,n.web_url=r,n.energy=e.statistics.energy.toFixed(5),n.co2=e.statistics.co2.grid.grams.toFixed(5),n.green=e.green,n.section=g,n}function x(e){e=JSON.stringify(e),fetch(f,{method:"post",headers:{"Content-Type":"application/json","x-apikey":p},body:e}).then(t=>t.json()).then(t=>S(t))}function S(e){q(e),l(e)}function _(){const e=i.elements.images.value,t=i.elements.image_type.value,r=i.elements.headers.value;console.log(r),e==0&&t=="wepd"||r==0&&t=="wepd"||e==0&&r==0?(n.performance=.99,n.energy=41e-5,n.green=!0,n.loading_experience="FAST"):e==1&&t=="png"||r==1&&t=="png"||e==1&&r==1?(n.performance=.83,n.energy=73e-5,n.green=!1,n.loading_experience="SLOW"):e==0||t=="wepd"||r==0?(n.performance=.99,n.energy=45e-5,n.green=!0,n.loading_experience="AVERAGE"):e==1&&t=="jpeg"||r==1&&t=="jpeg"?(n.performance=.84,n.energy=69e-5,n.green=!1,n.loading_experience="SLOW"):e==.5||t=="jpeg"||r==.5?(n.performance=.94,n.energy=59e-5,n.green=!0,n.loading_experience="SLOW"):(e==1||t=="png"||r==1)&&(n.performance=.88,n.energy=65e-5,n.green=!1,n.loading_experience="SLOW"),l(n)}function q(e){const t=document.querySelector("#carbon_template").content.cloneNode(!0);t.querySelector("[data-field=energy]").textContent=e.energy,t.querySelector("[data-field=co2]").textContent=e.co2+" grams",t.querySelector("[data-field=green]").textContent=e.green,t.querySelector("[data-field=performance]").textContent=e.performance,t.querySelector("[data-field=timing]").textContent=e.timing,t.querySelector("[data-field=overall_loading_experience]").textContent=e.loading_experience,document.querySelector("#your_result #list tbody").appendChild(t)}function l(e){const t=document.querySelector(".the_end_card");t.querySelector("[data-field=company]").textContent=e.site_name,t.querySelector("[data-field=performance]").textContent=e.performance,t.querySelector("[data-field=overall_loading_experience]").textContent=e.loading_experience,t.querySelector("[data-field=timing]").textContent=e.timing,t.querySelector("[data-field=energy]").textContent=e.energy,t.querySelector("[data-field=co2]").textContent=e.co2,e.green==!0?t.querySelector("[data-field=green]").textContent="Green":t.querySelector("[data-field=green]").textContent="Not green"}
