let form = document.querySelector("#form");
let url =
  "https://script.google.com/macros/s/AKfycbxeZADDMD6oCDsaOWNEbnr9xe7GpvT8vhRwBYvBYX-bxwMJtMnLtdfDmb5GAsWZ5rPf/exec";

let svg = document.querySelector('svg')
let save = document.getElementById('save')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  init()
  let formData = new FormData(form);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res)=>res.text())
    .then((data)=>{
      DataSaved(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function DataSaved(e){
 if(e!==""){
  Swal.fire({
    title: "Submitted",
    text: "Form successfully submitted to database",
    icon: "success"
  });
  form.reset()
  save.innerHTML = 'Submit'
  
 }else{
  Swal.fire({
    title: "Error",
    text: "Form couldn't submitted to database",
    icon: "error"
  });
  save.innerHTML = 'Submit'
 }
}


function init(){
  save.innerHTML = `<div class="loader"></div>`
}