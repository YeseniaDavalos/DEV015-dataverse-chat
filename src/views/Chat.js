import data from '../data/dataset.js';

import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";
import { ChatIndividual } from "../components/ChatIndividual.js";

/**
 * Chat is a function component that creates and returns a view element.
 * @param {object} props - The properties of the view.
 * @returns {HTMLElement} - The HTML element representing the Chat view.
 */


export function Chat(props) {
  // Creamos la vista
  const chatView = document.createElement("div");
  chatView.classList.add("chat");

  // Añadimos los componentes a la vista
  chatView.appendChild(Nav());
  const mainElement = document.createElement("main");
  mainElement.classList.add("chat__main");
  chatView.appendChild(mainElement);
  mainElement.appendChild(ChatIndividual(props));

  // Localizamos el item en el dataset
  const itemData = data.find((item) => item.id === props.id);

  if (!itemData) {
    navigateTo("/404");
    return chatView;
  }

  // Añadimos el título, el favicon y hacemos disponible el ícono del input
  document.title = `Chat con ${itemData.name}`;
  let faviconElement = document.querySelector("[type='image/x-icon']");
  if (!faviconElement) {
    // Si no existe, lo creamos
    faviconElement = document.createElement('link');
    faviconElement.rel = 'icon';
    faviconElement.type = 'image/x-icon';
    document.head.appendChild(faviconElement);
  }
  faviconElement.href = itemData.imageUrl || 'ruta-a-imagen-default.svg';
  
  
  document.querySelector("head").innerHTML += `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />
  `;

  // Creamos la estructura de información adicional
  const dataElement = document.createElement("li");
  dataElement.classList.add("data__container");
  dataElement.setAttribute("itemscope", "");
  dataElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  dataElement.setAttribute("data-id", itemData.id);

  dataElement.innerHTML = `
      <div class="data__image">
        <img class="data__image__background" src="${itemData.imageUrl}" alt="${itemData.name}" itemprop="image"/>
      </div>
      <div class="data__text">
        <div class="data__text__title">
          <h3 id="title__name" itemprop="name">${itemData.name}</h3>
        </div>
        <p class="data__text__description" itemprop="description">${itemData.description}</p>
      </div>
    `;

  mainElement.appendChild(dataElement);

  //getElementsAndEvents is a function that sets up the necessary events and behaviors for the elements within the component's view
  const getElementsAndEvents = () => {};

  // Aquí devolvemos directamente el elemento `chatView`
  return chatView;
}


//se elimino la linea que contiene Creado en: undefined Autor: undefined Porcentaje de usuarios: undefined
//undefined undefined