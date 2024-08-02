//Esta carpeta generalmente contiene archivos de los componentes que representan las diferentes páginas o vistas de tu aplicación. 
//Cada vista (view) puede tener su propio archivo JavaScript, que exporta una función que es responsable de generar los elementos del DOM.

//En este archivo vas a manejar el enrutamiento de tu aplicación. Es un archivo que debes crearlo por tu cuenta.


let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}