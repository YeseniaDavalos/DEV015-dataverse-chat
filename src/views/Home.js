import { Header } from "../components/Header.js";
import { Section } from "../components/Section.js";
import { mainFilter } from "../components/mainFilter.js";
import { Footer } from "../components/Footer.js";
import { renderItems } from "../view.js";
import { filterData, sortData } from '../lib/dataFunctions.js';
import data from "../data/dataset.js";

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

  let filteredData = data;
  const showData = renderItems(filteredData);
  viewEl.appendChild(showData);

  const filterType = main.querySelector("#filter-select");
  const filterGender = main.querySelector('[data-testid="select-filter"]');
  const filterSize = main.querySelector("#size-select");
  const sort = main.querySelector("#ordenar");

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
  const clear = main.querySelector("#reset-button");
  clear.addEventListener("click", function () {
    filterType.value = "";
    filterGender.value = "";
    filterSize.value = "";
    sort.value = "";

    viewEl.innerHTML = "";
    viewEl.appendChild(showData);
  });
  viewEl.appendChild(footerEl);
  return viewEl;
}
