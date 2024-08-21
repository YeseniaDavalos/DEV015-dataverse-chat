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



//El punto de partida para tu SPA sera el archivo src/index.js. Acá encontrarás algunas instrucciones y comentarios para guiarte en el inicio del desarrollo de tu aplicación.

import Home from './views/Home';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

setRootEl(document.getElementById('root'));

// Define your routes and their associated views
const routes = {
  '/': Home,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl('root');
});


// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
    // set root element
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found');
      return;
    }
    // invoke onURLChange 
    onURLChange(window.location);
  });


  
// import navigateTo
// ...
// return el
// Handle URL changes

export const Home = (props) => {
  // Crear el elemento div para la vista Home
  const el = document.createElement('div');
  el.textContent = `¡Bienvenido a la página de inicio, ${props.name || 'Visitante'}!`;
  
  // Si hay un id en las props, lo mostramos en la consola
  if (props.id) {
    console.log(props.id);
  }

  // Si existe un linkEl, agregar un evento de clic para navegar
  const linkEl = document.createElement('a');
  linkEl.textContent = 'Ir a la página About';
  linkEl.href = '/about';
  linkEl.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página
    navigateTo("/about", { name: "Xochitl" });
  });

  // Añadir el linkEl al elemento principal
  el.appendChild(linkEl);

  return el;
};



