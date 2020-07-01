let name = document.querySelector("#name");
let family = document.querySelector("#family");
let age = document.querySelector("#age");
let Weight = document.querySelector("#Weight");
let height = document.querySelector("#height");
let formsubmit = document.querySelector("form");
let tab = document.querySelector("tbody");
let clear = document.querySelector("#clear-all");
let search = document.querySelector("#search");
let mes = document.querySelector("#mes");
console.log(mes);

//function form

formsubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    name.value === "" ||
    family.value === "" ||
    age.value === "" ||
    Weight.value === "" ||
    height.value === ""
  ) {
    mes.innerHTML = `   <div class="alert alert-danger" role="alert">
    One of the field is empty
</div>`;
  } else {
    let tabletr = document.createElement("tr");
    tabletr.innerHTML = ` <td>${name.value}</td>
    <td>${family.value}</td>
    <td>${age.value}</td>
    <td>${Weight.value}</td>
    <td>${height.value}</td>
    <td><i class="far fa-window-close text-danger" style="font-size:1.3rem;"></i></td>`;
    tab.appendChild(tabletr);
    name.value = "";
    family.value = "";
    age.value = "";
    Weight.value = "";
    height.value = "";
    mes.innerHTML = `  <div class="alert alert-success" role="alert">
    A member was added to the table
  </div>`;
  }
});
