export const Footer = () => {
// Crear el elemento section con clase "footer-top"
  const section = document.createElement('section');
  section.classList.add('footer-top');

  // Crear el div con clase "footer-column"
  const footerColumnDiv = document.createElement('div');
  footerColumnDiv.classList.add('footer-column');

  // Crear la primera caja "Quick Links"
  const box1 = document.createElement('div');
  box1.classList.add('box');

  const h3_1 = document.createElement('h3');
  h3_1.textContent = 'Quick Links';

  const links1 = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Filter' },
    { href: '#', text: 'Statistics' },
    { href: '#animals', text: 'About us' },
    { href: '#donate', text: 'Donate' },
    { href: '#contact', text: 'Contact us' },
  ];

  links1.forEach(linkInfo => {
    const a = document.createElement('a');
    a.href = linkInfo.href  
    a.textContent = linkInfo.text;
    box1.appendChild(a);
  });

  box1.insertBefore(h3_1, box1.firstChild);

  // Crear la segunda caja "Extra Links"
  const box2 = document.createElement('div');
  box2.classList.add('box');

  const h3_2 = document.createElement('h3');
  h3_2.textContent = 'Extra Links';

  const links2 = [
    { href: '#', text: 'My Account' },
    { href: '#', text: 'My Favorite' },
  ];

  links2.forEach(linkInfo => {
    const a = document.createElement('a');
    a.href = linkInfo.href;
    a.textContent = linkInfo.text;
    box2.appendChild(a);
  });

  box2.insertBefore(h3_2, box2.firstChild);

  // Crear la tercera caja "Locations"
  const box3 = document.createElement('div');
  box3.classList.add('box');

  const h3_3 = document.createElement('h3');
  h3_3.textContent = 'Locations';

  const links3 = [
    { href: '#', text: 'Colombia' },
    { href: '#', text: 'Argentina' },
    { href: '#', text: 'Perú' },
  ];

  links3.forEach(linkInfo => {
    const a = document.createElement('a');
    a.href = linkInfo.href;
    a.textContent = linkInfo.text;
    box3.appendChild(a);
  });

  box3.insertBefore(h3_3, box3.firstChild);

  // Crear la cuarta caja "Contact Info"
  const box4 = document.createElement('div');
  box4.classList.add('box');

  const h3_4 = document.createElement('h3');
  h3_4.textContent = 'Contact Info';

  const contactLinks = [
    { href: '#', text: '+54 444 333 222' },
    { href: '#', text: '+31 888 333 222' },
    { href: 'mailto:PetFinder@gmail.com', text: 'PetFinder@gmail.com' },
    { href: '#', text: 'Colombia, Peru - 400104' },
  ];

  contactLinks.forEach(linkInfo => {
    const a = document.createElement('a');
    a.href = linkInfo.href;
    a.textContent = linkInfo.text;
    box4.appendChild(a);
  });

  const paymentMethodsDiv = document.createElement('div');
  paymentMethodsDiv.classList.add('payment-methods');

  const img1 = document.createElement('img');
  img1.src = 'https://ps.w.org/woo-mpgs/assets/icon-256x256.jpg?rev=2087215';
  img1.alt = 'Mastercard';

  const img2 = document.createElement('img');
  img2.src = 'https://cdn.iconscout.com/icon/free/png-256/free-paypal-58-711793.png?f=webp';
  img2.alt = 'Paypal';

  const img3 = document.createElement('img');
  img3.src = 'https://companiesmarketcap.com/img/company-logos/256/V.png';
  img3.alt = 'Visa';

  paymentMethodsDiv.appendChild(img1);
  paymentMethodsDiv.appendChild(img2);
  paymentMethodsDiv.appendChild(img3);

  box4.appendChild(paymentMethodsDiv);  
  // Añadir todas las cajas al div "footer-column"
  footerColumnDiv.appendChild(box1);
  footerColumnDiv.appendChild(box2);
  footerColumnDiv.appendChild(box3);
  footerColumnDiv.appendChild(box4);

  // Crear el elemento footer
  const footer = document.createElement('footer');

  const highlightDiv = document.createElement('div');
  highlightDiv.classList.add('highlight');
  highlightDiv.innerHTML = 'Created By <span>Bárbara y Yesenia</span> | All Rights Reserved';

  footer.appendChild(highlightDiv);

  // Añadir el div "footer-column" y el footer al section
  section.appendChild(footerColumnDiv);
  section.appendChild(footer);

  return section;
}

