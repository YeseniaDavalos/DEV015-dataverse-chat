import Home from './views/Home.js';
import Chat from './views/Chat.js';
import NotFound from './views/NotFound.js';
import { setRootEl, setRoutes, onURLChange, navigateTo } from './router.js'; // Importa navigateTo si no estaba antes

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/chat': Chat,  // Asegúrate de usar la ruta en minúsculas para evitar errores de mayúsculas/minúsculas
  '/notfound': NotFound,
};

// Asigna las rutas
setRoutes(routes);

// Configura el elemento raíz donde se renderizarán las vistas
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  setRootEl(rootElement);  // Se asegura de pasar el elemento real, no solo el ID
  onURLChange(window.location); // Maneja la carga inicial de la URL
});

// Maneja los eventos popstate para la navegación del historial
window.addEventListener("popstate", () => {
  onURLChange(window.location);
});

// Ejemplo de navegación programática (añade estos event listeners si necesitas que los botones naveguen)
const buttonChat = document.querySelector("#button-chat");
if (buttonChat) {
  buttonChat.addEventListener("click", () => navigateTo("/chat"));
}

const buttonHome = document.querySelector("#button-home");
if (buttonHome) {
  buttonHome.addEventListener("click", () => navigateTo("/"));
}
