// src/views/Home.js
import { Header } from "../components/Header.js";
import { Section } from "../components/Section.js";
import { mainFilter } from "../components/mainFilter.js";
import { Footer } from "../components/Footer.js";
import { renderItems } from "../view.js";
import { filterData, sortData } from '../lib/dataFunctions.js';
import { setApiKey } from '../lib/apiKey.js';
import data from "../data/dataset.js";
import { navigateTo } from '../router.js';



//const showData = renderItems(data);
//export function Home(props) {
export function Home() {
  const headerEl = Header();
  const sectionEl = Section();
  const [h1, main] = mainFilter();
  const footerEl = Footer();

  const viewEl = document.createElement('div');
  viewEl.appendChild(headerEl);
  viewEl.appendChild(sectionEl);
  viewEl.appendChild(h1);
  viewEl.appendChild(main);
  //viewEl.appendChild(showData);
  //viewEl.appendChild(footerEl);



  //1. Integrar el Filtro en Home.js
  //2. Crear los Elementos y Añadir Event Listeners
  //3. Mover la Lógica del DOM a Home.js
  //4. Implementación



  // Mostrar datos iniciales
  let filteredData = data;
  const showData = renderItems(filteredData);
  viewEl.appendChild(showData);

  // Elementos de filtro
  const filterType = main.querySelector("#filter-select");
  const filterGender = main.querySelector('[data-testid="select-filter"]');
  const filterSize = main.querySelector("#size-select");
  const sort = main.querySelector("#ordenar");

  // Listeners para los eventos de los filtros
  filterType.addEventListener("change", function () {
    updateFilteredData();
  });

  filterGender.addEventListener("change", function () {
    updateFilteredData();
  });

  filterSize.addEventListener("change", function () {
    updateFilteredData();
  });

  sort.addEventListener("change", () => {
    updateFilteredData();
  });

  // Filtrar y ordenar los datos según la entrada del usuario
  function updateFilteredData() {
    viewEl.innerHTML = '';
    filteredData = filterData(data, "pet", filterType.value);
    if (filterGender.value) {
      filteredData = filterData(filteredData, "gender", filterGender.value);
    }
    if (filterSize.value) {
      filteredData = filterData(filteredData, "petSize", filterSize.value);
    }
    if (sort.value === "asc" || sort.value === "desc") {
      filteredData = sortData(filteredData, "name", sort.value);
    }
    viewEl.appendChild(renderItems(filteredData));
  }

  // Botón para limpiar los filtros
  const clear = main.querySelector("#reset-button");
  clear.addEventListener("click", function () {
    filterType.value = "";
    filterGender.value = "";
    filterSize.value = "";
    sort.value = "";

    viewEl.innerHTML = "";
    viewEl.appendChild(showData);
  });

  // Modal y clave de API
  const dialog = main.querySelector('#dialog');
  const jsbutton = main.querySelector('#jsbutton');
  const modal = main.querySelector('#modal');
  const saveForm = main.querySelector('#saveForm');
  const apiKeyInput = main.querySelector('#apiKeyInput');

  modal.addEventListener('click', () => {
    dialog.showModal();
  });

  jsbutton.addEventListener('click', () => {
    dialog.close();
  });

  saveForm.addEventListener('submit', function (event) { //aqui usamos event
    event.preventDefault(); // Esto previene que el formulario se envíe automáticamente.
    const apiKeyValue = apiKeyInput.value.trim();
    setApiKey(apiKeyValue);
  });
  

  viewEl.appendChild(footerEl);

  //const chatEl = viewEl.getElementById("button-chat")
  //chatEl.addEventListener("click", function (event) {
  //  navigateTo("/chat")
  //})


  // Ejemplo de navegación programática (añade estos event listeners si necesitas que los botones naveguen)
  const buttonChat = viewEl.querySelector("#button-chat"); //elementView
  if (buttonChat) {
    buttonChat.addEventListener("click", () => navigateTo("/chat"));
  }

  return viewEl;
}


//quitar los even si no los vamos a utilizar

