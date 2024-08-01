// src/views/Home.js

export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';
    return viewEl;
  }
  
  // src/views/About.js
  
  export function About(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'This is the About page.';
    return viewEl;
  }

  
  // Definir funciones/componentes similares para otras rutas