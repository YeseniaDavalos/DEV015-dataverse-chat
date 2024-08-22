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
//5. Manejar la carga de la primera página
//Asegúrese de manejar la carga de la página inicial llamando a onURLChange con window.location.

//En index.js


window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange 
});