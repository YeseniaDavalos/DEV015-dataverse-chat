// src/views/Chat.js
//import data from "../data/dataset.js"; // Asegurar de tener el conjunto de datos disponible
import { navigateTo } from '../router.js';

export function Chat() {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'aqui va a ir mi chat :D';
  return viewEl;
}

// Definir funciones/componentes similares para otras rutas



const buttonHome = document.querySelector("#button-home");
if (buttonHome) {
  buttonHome.addEventListener("click", () => navigateTo("/"));
}





/*
import data from "../data/dataset.js"; // Asegurar de tener el conjunto de datos disponible
import { navigateTo } from '../router.js';


export function Chat(props) {
  const viewEl = document.createElement('div');

  // Título del Chat
  const title = document.createElement('h2');
  title.textContent = `Chat with ${props.name || 'Anonymous'}`;
  viewEl.appendChild(title);

  // Crear un contenedor para los mensajes
  // Crea estilos Css para los mensajes
  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat-container');
  chatContainer.style.overflowY = 'auto';  // Añadir scroll si es necesario
  chatContainer.style.maxHeight = '300px';  // Limitar la altura si es necesario
  chatContainer.style.border = '1px solid #ddd';  // Para visualizar el contenedor
  chatContainer.style.padding = '10px';
  chatContainer.style.marginBottom = '10px';

  // Mensaje inicial
  const message = document.createElement('p');
  message.textContent = `You are now chatting with ${props.name || 'Wilbur'}.`;
  chatContainer.appendChild(message);

  viewEl.appendChild(chatContainer);

  // Crear un contenedor para el input y el botón de envío
  const inputContainer = document.createElement('div');
  inputContainer.style.display = 'flex';

  // Crear un campo de entrada para enviar mensajes
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type your message...';
  input.style.flex = '1';
  input.style.marginRight = '10px';  // Espacio entre input y botón
  inputContainer.appendChild(input);

  // Botón para enviar mensajes
  const sendButton = document.createElement('button');
  sendButton.textContent = 'Send';
  inputContainer.appendChild(sendButton);

  viewEl.appendChild(inputContainer);

  // Event listener para enviar mensajes
  sendButton.addEventListener('click', () => {
    if (input.value.trim()) {
      const userMessage = document.createElement('p');
      userMessage.textContent = `You: ${input.value}`;
      chatContainer.appendChild(userMessage);
      input.value = ''; // Limpiar el campo de entrada

      // Forzar el scroll hacia abajo
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });

  // Botón para regresar a la página principal
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Go Back To Home';
  buttonHome.addEventListener('click', () => navigateTo("/"));
  viewEl.appendChild(buttonHome);

  return viewEl;
}

*/




