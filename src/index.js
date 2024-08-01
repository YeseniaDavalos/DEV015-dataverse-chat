// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

import Home from './views/Home';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */);
});


// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
    // set root element
    // invoke onURLChange 
  });


  
// import navigateTo

export const Home = (props) => {
    // ...
    linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
    // return el
  }

  // Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
    onURLChange(/* location */);
 });




 export const Home = (props) => {
    const el = document.createElement('div');
    el.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
    console.log(props.id);
    return el;
  }



  navigateTo("/", { nombre: "Xóchitl", id: "100"});