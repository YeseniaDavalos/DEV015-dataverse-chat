// src/views/Home.js
import { Header } from "../components/Header.js"
import { Section } from "../components/Section.js";
import { mainFilter } from "../components/mainFilter.js";
import { Footer } from "../components/Footer.js";
import { renderItems } from "../view.js";
import data from "../data/dataset.js";

const showData = renderItems(data);

export function Home(props) {
  const headerEl = Header();
  const sectionEl = Section();
  const [h1, main] = mainFilter();
  const footerEl = Footer();

  const viewEl = document.createElement('div');
  viewEl.appendChild(headerEl);
  viewEl.appendChild(sectionEl);
  viewEl.appendChild(h1);
  viewEl.appendChild(main);
  viewEl.appendChild(showData);
  viewEl.appendChild(footerEl);


  return viewEl;
}

