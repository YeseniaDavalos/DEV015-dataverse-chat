import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
import NotFound from './views/NotFound.js';
import { ApiKey } from "./views/ApiKey.js";
import { setRootEl, setRoutes, onURLChange } from './router.js'; 

const routes = {
  '/': Home,
  '/chat': Chat,
  '/NotFound': NotFound,
  '/api-key': ApiKey,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return;
  }
  setRootEl(rootElement); 
  onURLChange(window.location); 
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});