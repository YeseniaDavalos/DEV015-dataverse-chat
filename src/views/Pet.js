// Crear el contenedor principal "root"
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
rootDiv.classList.add('picture');

// Agregar "root" al cuerpo del documento
document.body.appendChild(rootDiv);

// Crear el contenedor principal
const iconsDiv = document.createElement('div');
iconsDiv.classList.add('icons');

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

// Crear la etiqueta y el input
const label = document.createElement('label');
label.textContent = 'Api Key:';

const apiKeyInput = document.createElement('input');
apiKeyInput.id = 'apiKeyInput';
apiKeyInput.type = 'password';
apiKeyInput.min = '0';
apiKeyInput.max = '10';
apiKeyInput.step = '1';
apiKeyInput.name = 'api key';
apiKeyInput.required = true;

// Añadir el input dentro del label
label.appendChild(apiKeyInput);

// Añadir el label dentro del párrafo
lengthParagraph.appendChild(label);

// Crear el segundo párrafo para los botones de submit y reset
const buttonsParagraph = document.createElement('p');
buttonsParagraph.classList.add('length');

// Crear el botón de submit
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Save Api Key';

// Crear el botón de reset
const resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.type = 'reset';
resetButton.textContent = 'Delete';

// Añadir los botones dentro del párrafo
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
modalButton.textContent = 'Open Modal dialog';

// Añadir el dialog y el botón dentro del contenedor principal
iconsDiv.appendChild(dialog);
iconsDiv.appendChild(modalButton);

// Añadir el contenedor principal al cuerpo del documento (o a donde quieras insertarlo)
document.body.appendChild(iconsDiv);
