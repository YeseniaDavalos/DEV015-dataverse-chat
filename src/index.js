import { Home } from './views/Home.js';
import { setRootEl, setRoutes, onURLChange } from './views/router.js';
import { Chat } from './views/Chat.js';
import NotFound from './views/NotFound.js';
//import { Header } from "./components/Header.js";


setRootEl(document.getElementById('root'));

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/Chat': Chat,
  '/NotFound': NotFound,
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

// Acceder a los botones por ID
//const buttonChat = document.querySelector("#button-chat");

// Añadir event listeners para la navegación
//buttonChat.addEventListener("click", () => navigateTo("/chat", {}));


//export const Home = (props) => {
//  const el = document.createElement('div');
//  el.textContent = `¡Bienvenido a la página de inicio, ${props.name || 'invitado'}!`;
//  console.log(`ID: ${props.id}`);
//  return el;
//};


//navigateTo("/", { name: "Xóchitl", id: "100" });
