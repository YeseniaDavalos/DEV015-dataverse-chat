//Esta carpeta generalmente contiene archivos de los componentes que representan las diferentes páginas o vistas de tu aplicación. 
//Cada vista (view) puede tener su propio archivo JavaScript, que exporta una función que es responsable de generar los elementos del DOM.

//En este archivo vas a manejar el enrutamiento de tu aplicación. Es un archivo que debes crearlo por tu cuenta.


let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  if (typeof routes !== 'object' || routes === null || Array.isArray(routes)) {
    throw new Error("The 'routes' parameter must be an object.");
  }
  // optional Throw errors if routes doesn't define an /error route
  if (!routes.hasOwnProperty('/error')) {
    throw new Error("The 'routes' object must define an '/error' route.");
  }
  // assign ROUTES
  routes = routes;
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const result = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  // return the object
  return result;
};


const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
// Supongamos que ROUTES es un objeto con componentes de vista asociados a rutas
const ROUTES = {
  '/home': (props) => `<div>Home View: ${props.message}</div>`,
  '/about': (props) => `<div>About View: ${props.message}</div>`,
  '/error': (props) => `<div>Error View: ${props.message}</div>`,
};

const renderView = (pathname, props = {}) => {
  // Obtener el elemento raíz del DOM (supongamos que tiene el ID 'root')
  const rootElement = document.getElementById('root');
  
  // Limpiar el elemento raíz
  rootElement.innerHTML = '';

  // Encontrar la vista correspondiente al pathname en ROUTES
  const view = ROUTES[pathname] || ROUTES['/error'];

  // Renderizar la vista pasando las propiedades (props)
  const viewElement = view(props);

  // Agregar el elemento de la vista al DOM
  rootElement.innerHTML = viewElement;
};

// Ejemplo de uso
renderView('/home', { message: 'Welcome to the Home Page!' });

} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props

    // Actualizar el historial del navegador con pushState
    window.history.pushState({ path: pathname }, '', pathname);
  
    // Renderizar la vista con el pathname y props
    renderView(pathname, props);
  };


export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const { pathname, search } = location;
  // Crear un objeto URLSearchParams a partir de los search params
  const searchParams = new URLSearchParams(search);
  // convert the search params to an object
  const paramsObject = {};
  for (const [key, value] of searchParams) {
    paramsObject[key] = value;
  }
  // render the view with the pathname and object
  renderView(pathname, paramsObject);
}

//esto adicional lo coloque

export function setRoutes(routesConfig) {
  routes = routesConfig;
}

export function renderView(view) {
  rootElement.innerHTML = '';
  rootElement.appendChild(view());
}

export function onURLChange() {
  const path = window.location.pathname;
  const view = routes[path];
  if (view) {
      renderView(view);
  } else {
      renderView(routes['/404']); // Opcional: para manejar rutas no encontradas
  }
}


// src/router.js
let viewEl = null;

export function renderView(view) {
    if (viewEl) {
        rootElement.removeChild(viewEl); // Elimina la vista anterior
    }
    viewEl = view(); // Actualiza viewEl con la nueva vista
    rootElement.appendChild(viewEl); // Inserta la nueva vista en el contenedor principal
}
