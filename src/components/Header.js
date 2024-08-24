export const Header = () => {
    // Crear el elemento header
    const headerEl = document.createElement('header');
  
    // Crear el label
    const label = document.createElement('label');
    label.setAttribute('for', 'toggler');
    label.classList.add('fas', 'fa-bars');
  
    // Crear el input checkbox
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'toggler';
  
    // Crear el enlace con el logo
    const logoLink = document.createElement('a');
    logoLink.href = '#';
  
    const logoImg = document.createElement('img');
    logoImg.src = 'img/Logo (1).png';
    logoImg.alt = 'Logo';
    logoImg.classList.add('logo');
  
    logoLink.appendChild(logoImg);
  
    // Crear la barra de navegación
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
  
    const navLinks = [
      { href: '#filterSelect', text: 'Filter' },
      { href: '#stadistics', text: 'Statistics' },
      { href: '#animals', text: 'About us' },
      { href: '#donate', text: 'Donate' },
      { href: '#contact', text: 'Contact us' },
    ];
  
    navLinks.forEach(linkInfo => {
      const a = document.createElement('a');
      a.href = linkInfo.href;
      a.textContent = linkInfo.text;
      nav.appendChild(a);
    });
  
    // Crear el h1 vacío
    const h1 = document.createElement('h1');
  
    // Crear el contenedor de iconos
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
  
    //Crear boton de chat
    const chat = document.createElement('button');
    chat.classList.add('icons');
    chat.id = 'button-chat';
    chat.textContent = 'Pet Talk';


    // Crear el dialog
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';
    dialog.classList.add('modal');
  
    // Crear el formulario
    const saveForm = document.createElement('form');
    saveForm.id = 'saveForm';
  
    // Crear el botón de cierre
    const closeButton = document.createElement('button');
    closeButton.id = 'jsbutton';
    closeButton.type = 'submit';
    closeButton.setAttribute('aria-label', 'close');
    closeButton.setAttribute('formmethod', 'dialog');
    closeButton.setAttribute('formnovalidate', '');
    closeButton.textContent = 'X';
  
    // Crear el título
    const title = document.createElement('h2');
    title.id = 'dialogid';
    title.textContent = 'Api Key Admin';
  
    // Crear el párrafo de descripción
    const description = document.createElement('p');
    description.textContent = 'From here you can manage the API Key to use';
  
    // Crear el párrafo con la etiqueta del input
    const lengthParagraph = document.createElement('p');
    lengthParagraph.classList.add('length');
  
    const labelForInput = document.createElement('label');
    labelForInput.textContent = 'Api Key:';
  
    const apiKeyInput = document.createElement('input');
    apiKeyInput.id = 'apiKeyInput';
    apiKeyInput.type = 'password';
    apiKeyInput.min = '0';
    apiKeyInput.max = '10';
    apiKeyInput.step = '1';
    apiKeyInput.name = 'api key';
    apiKeyInput.required = true;
  
    labelForInput.appendChild(apiKeyInput);
    lengthParagraph.appendChild(labelForInput);
  
    // Crear el segundo párrafo para los botones de submit y reset
    const buttonsParagraph = document.createElement('p');
    buttonsParagraph.classList.add('length');
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Save';
  
    const resetButton = document.createElement('button');
    resetButton.id = 'reset';
    resetButton.type = 'reset';
    resetButton.textContent = 'Delete';
  
    buttonsParagraph.appendChild(submitButton);
    buttonsParagraph.appendChild(resetButton);
  
    // Añadir todos los elementos dentro del formulario
    saveForm.appendChild(closeButton);
    saveForm.appendChild(title);
    saveForm.appendChild(description);
    saveForm.appendChild(lengthParagraph);
    saveForm.appendChild(buttonsParagraph);
  
    // Añadir el formulario dentro del dialog
    dialog.appendChild(saveForm);
  
    // Crear el botón para abrir el modal
    const modalButton = document.createElement('button');
    modalButton.id = 'modal';
    modalButton.textContent = 'Open Api Key';
  
    // Añadir el dialog y el botón dentro del contenedor principal
    iconsDiv.appendChild(dialog);
    iconsDiv.appendChild(modalButton);
  
    // Añadir todos los elementos al header
    headerEl.appendChild(label);
    headerEl.appendChild(input);
    headerEl.appendChild(logoLink);
    headerEl.appendChild(nav);
    headerEl.appendChild(h1);
    headerEl.appendChild(chat)
    headerEl.appendChild(iconsDiv);


      // Acceder a los botones por ID
  const buttonChat = headerEl.querySelector("#button-chat");

  // Añadir event listeners para la navegación
  buttonHome.addEventListener("click", () => navigateTo("/", {}));
  buttonChat.addEventListener("click", () => navigateTo("/chat", {}));

  
    return headerEl;
  } 




