export const Section = () => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('home');
  sectionEl.id = 'home';

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  const h3_1 = document.createElement('h3');
  h3_1.textContent = 'Adopt a pet';

  const h3_2 = document.createElement('h3');
  const span = document.createElement('span');
  span.textContent = 'A loyal friend awaits you';
  h3_2.appendChild(span);

  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  p.textContent = 'Give a loving home to a pet in need. Experience the joy and unconditional love that only a rescued pet can offer.';
  h2.appendChild(p);

  const a = document.createElement('a');
  a.href = '#';
  a.classList.add('btn');
  a.textContent = 'Learn more';

  contentDiv.appendChild(h3_1);
  contentDiv.appendChild(h3_2);
  contentDiv.appendChild(h2);
  contentDiv.appendChild(a);

  sectionEl.appendChild(contentDiv);

  return sectionEl;
};
