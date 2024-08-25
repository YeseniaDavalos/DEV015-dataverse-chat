import { Chat } from "../views/Chat.js";
import { Home } from "./Home.js";
 
let rootEl;

export function setRootEl(el) {
    rootEl = el;
}

export function setRoutes(routes) {
    window.routes = routes;
}

//setRoutes({
//  '/home': () => {
//      const div = document.createElement('div');
//      div.innerHTML = 'Home Page';
//      return div;
//  },
//  '/chat': () => {
//      const div = document.createElement('div');
//      div.innerHTML = 'Chat Page';
//      return div;
// },
//  '/error': () => {
//      const div = document.createElement('div');
//     div.innerHTML = 'Error: Page not found';
//      return div;
//  }
//});


//function isObject(obj) {
  //  return typeof obj === 'object' && obj !== null;
//}


const queryStringToObject = (queryString) => {
    const params = new URLSearchParams(queryString);
    return Object.fromEntries(params.entries());
};

export function onURLChange(location) {
    console.log("location",location)

    const path = location.pathname;
    console.log("location path",location.pathname)
    
    switch (path) {
      case "/chat":
          root.replaceChildren()
          const chatEl = Chat()
          root.appendChild(chatEl)
          break
      case "/":
           root.replaceChildren()
           const homeEl = Home()
           root.appendChild(homeEl)
           break
  }
}



export function navigateTo(path, props = {}) {
    window.history.pushState({}, path, window.location.origin + path);
    onURLChange(window.location);
}
