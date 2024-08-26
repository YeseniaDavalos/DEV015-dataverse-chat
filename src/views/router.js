import { Chat } from "../views/Chat.js";
import { Home } from "./Home.js";

let ROUTES = {};
let rootEl;

export function setRootEl(el) {
    rootEl = el;
}

export function setRoutes(routes) {
    window.routes = routes;
}


const queryStringToObject = (queryString) => {
    const params = new URLSearchParams(queryString);
    return Object.fromEntries(params.entries());
};

//const queryStringToObject = (queryString) => {
//    const params = new URLSearchParams(queryString);
//    const queryObject = {};
//    for (const [key, value] of params) {
//      queryObject[key] = value;
//    }
//   return queryObject;
// };



const renderView = (pathname, props = {}) => {
    if (!rootEl) {
        throw new Error('Root element is not set.');
    }

    // Clear the root element
    rootEl.innerHTML = '';

    // Find the correct view in ROUTES for the pathname
    const view = ROUTES[pathname] || ROUTES['/NotFound'];

    // Render the correct view passing the value of props
    const viewEl = view(props);

    // Add the view element to the DOM root element
    rootEl.appendChild(viewEl);
};




export function onURLChange(location) {
    console.log("location", location.pathname)
    console.log(queryStringToObject(location.search));
    const path = location.pathname;
    console.log("location path", location.pathname)
}


//    export const onURLChange = (location) => {
//        const { pathname, search } = location;
        // Convert the search params to an object
//        const queryObject = queryStringToObject(search);
        // Render the view with the pathname and query object
//        renderView(pathname, queryObject);
//    };



    //switch (path) {
    //  case "/chat":
    //      root.replaceChildren()
    //      const chatEl = Chat()
    //      root.appendChild(chatEl)
    //      break
    //  case "/":
    //       root.replaceChildren()
    //       const homeEl = Home()
    //       root.appendChild(homeEl)
    //       break
    //  }
    //}



    export function navigateTo(path, props = {}) {
        window.history.pushState({}, path, window.location.origin + path);
        onURLChange(window.location);
    }
