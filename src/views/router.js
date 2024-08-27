let ROUTES = {};
let rootEl;

// Asignar el elemento root
export function setRootEl(el) {
    rootEl = el;
}

// Configurar las rutas
export function setRoutes(routes) {
    if (typeof routes !== 'object' || !routes['/error']) {
        throw new Error("Las rutas deben ser un objeto que defina la ruta '/error'");
    }
    ROUTES = routes;
}

// Convertir query string a objeto
const queryStringToObject = (queryString) => {
    const params = new URLSearchParams(queryString);
    return Object.fromEntries(params.entries());
};

// Renderizar la vista
const renderView = (pathname, props = {}) => {
    if (!rootEl) {
        throw new Error('Root element is not set.');
    }

    // Limpiar el elemento root
    rootEl.innerHTML = '';

    // Encontrar la vista correcta en ROUTES para el pathname
    const view = ROUTES[pathname] || ROUTES['/error'];

    // Renderizar la vista pasando los props
    const viewEl = view(props);

    // Añadir el elemento de vista al elemento root en el DOM
    rootEl.appendChild(viewEl);
};

// Cambiar la URL y renderizar la vista
export function onURLChange(location) {
    const { pathname, search } = location;
    const queryObject = queryStringToObject(search);
    renderView(pathname, queryObject);
}

// Navegar a una ruta específica
export const navigateTo = (pathname, props = {}) => {
    window.history.pushState({}, pathname, window.location.origin + pathname + objectToQueryString(props));
    renderView(pathname, props);
  };

  

  // función específica para convertir un objeto a una query string.
  //Manejo de Query Strings: Su implementación permite convertir 
  //objetos a query strings y viceversa, lo que puede ser útil si necesitas reflejar estados o datos en la URL.
  export const objectToQueryString = (props) => {
    if (Object.keys(props).length !== 0) {
      let str = '?';
      for (const i in props) {
        str += i + '=' + props[i] + '&';
      }
  
      if (str.endsWith("&")) {
        str = str.slice(0, -1);
      }
  
      return str;
    } else {
      return '';
    }
  }
  
// Configurar la escucha de cambios en la URL
// addEventListener es generalmente más versátil y preferido por su capacidad de añadir múltiples listeners al mismo evento.
window.addEventListener('popstate', () => onURLChange(window.location));
