let rootEl;

export function setRootEl(el) {
    rootEl = el;
}

export function setRoutes(routes) {
    window.routes = routes;
}

setRoutes({
  '/home': () => {
      const div = document.createElement('div');
      div.innerHTML = 'Home Page';
      return div;
  },
  '/chat': () => {
      const div = document.createElement('div');
      div.innerHTML = 'Chat Page';
      return div;
  },
  '/error': () => {
      const div = document.createElement('div');
      div.innerHTML = 'Error: Page not found';
      return div;
  }
});


function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

const queryStringToObject = (queryString) => {
    const params = new URLSearchParams(queryString);
    return Object.fromEntries(params.entries());
}

export function onURLChange(location) {
    const path = location.pathname;
    const route = window.routes[path] || window.routes['/error'];
    if (typeof route !== 'function') {
        console.error(`Route for path '${path}' is not a function.`);
        return;
    }
    const view = route();
    rootEl.innerHTML = '';
    rootEl.appendChild(view);
}

export function navigateTo(path, props = {}) {
    window.history.pushState({}, path, window.location.origin + path);
    onURLChange(window.location);
}
