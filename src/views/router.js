
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;

  return rootEl;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES / debe haber una tabla de rutas 


  const ErrorView = () => {
    const el = document.createElement('div');
    el.textContent = '404 Not Found';
    return el;
  }  
 
  // ro

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


/*Explicación del código:
1. setRootEl(el): Establece el elemento raíz donde se mostrarán las vistas. Se almacena en rootEl.

2. setRoutes(routes): Establece las rutas disponibles para la SPA. Verifica que el parámetro sea un objeto y que 
contenga una ruta para /error. Si alguna de estas condiciones no se cumple, lanza un error.

3. queryStringToObject(queryString): Convierte una cadena de consulta (queryString) en un objeto con pares clave/valor. 
Esto facilita el acceso a los parámetros de consulta.

4. renderView(pathname, props = {}): Limpia el contenido del elemento raíz y busca la vista correspondiente a la 
ruta (pathname). Si no se encuentra, renderiza la vista de error. Agrega el elemento DOM devuelto por la función de vista al rootEl.

5. navigateTo(pathname, props = {}): Actualiza la URL usando window.history.pushState y luego llama a renderView 
para mostrar la vista correspondiente.

6. onURLChange(location): Maneja cambios en la URL, tanto cuando la aplicación se carga por primera vez como cuando 
se navega con el historial del navegador. Analiza el pathname y los parámetros de la URL para renderizar la vista correspondiente.

7. Evento popstate: Escucha los cambios en la URL que ocurren debido a la navegación del historial (e.g., el botón 
de retroceso del navegador) y llama a onURLChange.

Este código implementa un router básico para una Single Page Application (SPA), manejando la navegación y renderización 
de vistas según las rutas definidas.



rootEl - Elemento DOM: Una variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá.
setRootEl(el): Una función para establecer el elemento raíz del router.
renderView(pathname, props): Una función que renderiza una vista en el elemento root especificado. Tiene dos parametros, 
pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista. La función 
renderView borra el contenido existente, encuentra la función de view para el pathname dado y llama a esa función de vista 
pasando props como argumento ( más sobre eso en un momento ). Luego agrega el elemento devuelto por la función de vista al elemento root.*/