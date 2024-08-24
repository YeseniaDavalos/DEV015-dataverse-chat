import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
import { filterData, sortData } from './lib/dataFunctions.js';
import { renderItems } from "./view.js";
import data from "./data/dataset.js";
import { setApiKey } from './lib/apiKey.js';
import { navigateTo, setRoutes } from './views/router.js';


// Define your routes and their associated views
const routes = {
  '/': Home,
  '/Chat': Chat,
};

// Assign the routes
setRoutes(routes);


const showData = renderItems(data);

const root = document.querySelector("#root"); 

// Crear el elemento llamando a la función()
const homeElement = Home();
const ChatElement = Chat();

root.appendChild(ChatElement);
root.appendChild(homeElement);

let filteredData = data; 

const chatEl = document.getElementById("button-chat")

chatEl.addEventListener("click", function(event) {
    navigateTo("/chat")
})

const filterType = document.querySelector("#filter-select"); 
filterType.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "pet", event.target.value); 

  if (filterGender.value) {
    filteredData = filterData(filteredData, "gender", filterGender.value);
  }

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", filterSize.value);
  }

  root.appendChild(renderItems(filteredData));
});

const filterGender = document.querySelector('[data-testid="select-filter"]');
filterGender.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "gender", event.target.value);

  if (filterType.value) {
    filteredData = filterData(filteredData, "pet", filterType.value);
  }

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", filterSize.value);
  }

  root.appendChild(renderItems(filteredData));
});

const filterSize = document.querySelector("#size-select"); 
filterSize.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "petSize", event.target.value);

  if (filterType.value) {
    filteredData = filterData(filteredData, "pet", filterType.value);
  }

  if (filterGender.value) {
    filteredData = filterData(filteredData, "gender", filterGender.value);
  }

  root.appendChild(renderItems(filteredData));
});

const sort = document.querySelector("#ordenar"); 
sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;

  let orderData;
  if (sortValue === "asc" || sortValue === "desc") {
    orderData = sortData(filteredData, "name", sortValue);
  }

  root.innerHTML = "";
  root.appendChild(renderItems(orderData));
});

const dialog = document.getElementById('dialog');
const jsbutton = document.getElementById('jsbutton');
const modal = document.getElementById('modal');
const saveForm = document.getElementById('saveForm');
const apiKeyInput = document.getElementById('apiKeyInput');

modal.addEventListener('click', (event) => {
  dialog.showModal();
});

jsbutton.addEventListener('click', (event) => {
  dialog.close();
});


saveForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const apiKeyValue = apiKeyInput.value.trim();
  setApiKey(apiKeyValue); 
});

const clear = document.querySelector("#reset-button"); 
clear.addEventListener("click", function () {
  filterType.value = "";
  filterGender.value = "";
  filterSize.value = "";
  sort.value = "";

  root.innerHTML = "";
  root.appendChild(showData);
});

/*
const statistics = document.querySelector("#compute-stats-btn"); // Reemplazado getElementById con querySelector
statistics.addEventListener("click", function () {
  const statsDatos = document.createElement('p');
  const computedStats = computeStats(data);
  const petCatAvg = computedStats.petCatAvg;
  const petDogAvg = computedStats.petDogAvg;
  const genderMaleAvg = computedStats.genderMaleAvg;
  const genderFemaleAvg = computedStats.genderFemaleAvg;
  const petSizeSmallAvg = computedStats.petSizeSmallAvg;
  const petSizeBigAvg = computedStats.petSizeBigAvg;
  statsDatos.innerHTML = `<p>We have an average of ${petCatAvg}% felines</p>
                          <p>there is an average of ${petDogAvg}% canines,</p>
                          <p>of which ${genderMaleAvg}% are males and</p>
                          <p>${genderFemaleAvg}% are females.</p>
                          <p>Among them, there are also ${petSizeSmallAvg}% small ones</p>
                          <p>and ${petSizeBigAvg}% big ones</p>`;
  results.appendChild(statsDatos);
}); ¨*/
