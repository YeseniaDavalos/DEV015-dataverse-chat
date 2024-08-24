import Home from './views/Home';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Chat } from './views/Chat.js';


setRootEl(document.getElementById('root'));

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/Chat': Chat,
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





export const Home = (props) => {
    // ...
    linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
    // return el
    return linkEl;
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