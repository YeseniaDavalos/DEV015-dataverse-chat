let ROUTES = {};
let rootEl;

export function setRootEl(el) {
  rootEl = el;
}

export const setRoutes = (routes) => {
  if (typeof routes !== 'object') {
    throw new Error('Routes should be an object.');
  }
  if (!routes['/NotFound']) { 
    throw new Error('Routes should define an /NotFound route.');
  }
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
};

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
};

const renderView = (pathname, props = {}) => {
  if (!rootEl) {
    throw new Error('Root element is not set.');
  }
  rootEl.innerHTML = '';
  const view = ROUTES[pathname] || ROUTES['/NotFound'];
  const viewEl = view(props);
  if (!(viewEl instanceof Node)) {
    throw new Error('La vista no devolvió un nodo válido. Verifica la función de vista correspondiente.');
  }
  rootEl.appendChild(viewEl);
};

export function onURLChange(location) {
  const { pathname, search } = location;
  const queryObject = queryStringToObject(search);
  renderView(pathname, queryObject);
}

export const navigateTo = (pathname, props = {}) => {
  const isRouteDefined = Object.prototype.hasOwnProperty.call(ROUTES, pathname);
  if (!isRouteDefined) {
    pathname = '/NotFound';
  }
  window.history.pushState({}, pathname, window.location.origin + pathname + objectToQueryString(props));
  renderView(pathname, props);
};

window.addEventListener('popstate', () => onURLChange(window.location));
