import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
import NotFound from './views/NotFound.js';
import { ApiKey } from "./views/ApiKey.js";
import { setRootEl, setRoutes, onURLChange } from './router.js'; // Importa navigateTo si no estaba antes

// Define las rutas
//your routes and their associated views
const routes = {
  '/': Home,
  '/chat': Chat,
  '/NotFound': NotFound,
  '/api-key': ApiKey,
};

// Asigna las rutas
setRoutes(routes);

//window.addEventListener("DOMContentLoaded", () => { })
// Configura el elemento raíz donde se renderizarán las vistas
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return;
  }
  setRootEl(rootElement);  // Se asegura de pasar el elemento real, no solo el ID
  onURLChange(window.location); // Maneja la carga inicial de la URL
});

// Maneja los eventos popstate para la navegación del historial
window.addEventListener("popstate", () => {
  onURLChange(window.location);
});
