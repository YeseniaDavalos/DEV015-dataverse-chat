// src/views/Home.js
import { Header } from "../components/Header.js";
import { Section } from "../components/Section.js";
import { mainFilter } from "../components/mainFilter.js";
import { Footer } from "../components/Footer.js";
import { renderItems } from "../view.js";
import { filterData, sortData } from '../lib/dataFunctions.js';
import data from "../data/dataset.js";
import { navigateTo } from '../router.js';

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

  // Botón de chat
  const buttonChat = viewEl.querySelector("#button-chat"); 
  if (buttonChat) {
    buttonChat.addEventListener("click", () => navigateTo("/chat"));
  }

  viewEl.appendChild(footerEl);

  return viewEl;
}
