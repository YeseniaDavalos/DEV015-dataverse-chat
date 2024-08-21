export const Section = () => {
  // Crear el elemento section
  const section = document.createElement('section');
  section.classList.add('home');
  section.id = 'home';

  // Crear el div con clase "content"
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  // Crear los elementos h3 y span
  const h3_1 = document.createElement('h3');
  h3_1.textContent = 'Adopt a pet';

  const h3_2 = document.createElement('h3');
  const span = document.createElement('span');
  span.textContent = 'A loyal friend awaits you';
  h3_2.appendChild(span);

  // Crear el h2 con el párrafo
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  p.textContent = 'Give a loving home to a pet in need. Experience the joy and unconditional love that only a rescued pet can offer.';
  h2.appendChild(p);

  // Crear el enlace con la clase "btn"
  const a = document.createElement('a');
  a.href = '#';
  a.classList.add('btn');
  a.textContent = 'Learn more';

  // Añadir todos los elementos dentro del div "content"
  contentDiv.appendChild(h3_1);
  contentDiv.appendChild(h3_2);
  contentDiv.appendChild(h2);
  contentDiv.appendChild(a);

  // Añadir el div "content" dentro del section
  section.appendChild(contentDiv);

  return section;
}
