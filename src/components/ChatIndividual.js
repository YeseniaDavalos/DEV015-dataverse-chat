import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { navigateTo } from "../router.js";

// Ruta del logo predeterminado
const logoPath = 'img/Logo (1).png';


export const ChatIndividual = ({ id }) => {
  const { name, imageUrl = logoPath, shortDescription, description } = data.find(item => item.id === id) || {};
  
  const containerChat = document.createElement("div");
  containerChat.classList.add("chatIndividual"); // Clase para el contenedor principal del chat
  containerChat.innerHTML = `
    <div class="chat__title">
      <img class="chat__title__arrow" src="img/Logo (1).png" alt="back arrow"/>
      <div class="chat__title__text"> 
        <img class="chat__title__logo" src="${logoPath}" alt="chat logo"/>
        <div class="chat_details">
          <h1 class="chat__details__name">${name}</h1>
          <span class="chat__details__status">En línea</span>
        </div>
      </div>
    </div>
    <div class="overflow">
      <div class="chat__reply">
        <img class="chat__message__image" src="${imageUrl}" alt="chat icon"/>
        <div class="chat__reply__text">¡Hola, soy ${name}! ${shortDescription}</div>
      </div>
    </div>
    <div class="chat__input">
      <textarea class="chat__input__field" placeholder="Escribe un mensaje..."></textarea>
      <button class="chat__input__button">
        <span class="material-symbols-outlined">arrow_upward_alt</span>
      </button>
    </div>
  `;

  containerChat.querySelector(".chat__title__arrow").addEventListener("click", () => navigateTo("/"));
  
  const inputField = containerChat.querySelector(".chat__input__field");
  const chatContainer = containerChat.querySelector(".overflow");

  const addMessageToChat = (message, role) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add(role === "user" ? "chat__send" : "chat__reply");
    messageElement.innerHTML = `
      ${role === "user" ? `<div class="chat__message__text">${message}</div>` : `
        <img class="chat__message__image" src="${imageUrl}" alt="chat icon"/>
        <div class="chat__reply__text">${message}</div>`}
    `;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const sendMessage = async () => {
    const userMessage = inputField.value.trim();
    if (!userMessage) return;

    addMessageToChat(userMessage, "user");
    inputField.value = "";

    try {
      const response = await communicateWithOpenAI([
        { role: "system", content: `Estás roleando a ${name}. Responde en primera persona con base en esta descripción: ${description}` },
        { role: "user", content: userMessage }
      ]);
      const assistantMessage = response.choices[0].message.content;
      addMessageToChat(assistantMessage, "tech");
    } catch (error) {
      addMessageToChat(`Lo siento, no pude responder. ${error}`, "tech");
    }
  };

  inputField.addEventListener("keydown", (event) => event.key === "Enter" && sendMessage());
  containerChat.querySelector(".chat__input__button").addEventListener("click", sendMessage);

  return containerChat;
};

/*
Clases CSS importantes:
chatIndividual: Para el contenedor principal del chat.
chat__title: Para la barra de título del chat.
chat__title__arrow: Para el ícono de la flecha de regreso.
chat__title__text: Para el contenedor que agrupa el texto y el logo del título.
chat__title__logo: Para la imagen del logo del chat.
chat_details: Para agrupar los detalles del chat, como el nombre y el estado.
chat__details__name: Para el nombre del chat (probablemente será el nombre del contacto o del bot).
chat__details__status: Para el estado del chat (ej. "En línea").
overflow: Para el contenedor que mostrará los mensajes con funcionalidad de scroll.
chat__reply: Para los mensajes generados automáticamente por el sistema/chatbot.
chat__message__image: Para la imagen asociada con cada mensaje (puede ser un avatar del usuario o del bot).
chat__reply__text: Para el texto dentro del mensaje de respuesta.
chat__input: Para el contenedor del área de input.
chat__input__field: Para el campo de texto donde el usuario escribe.
chat__input__button: Para el botón que envía el mensaje.
chat__send: Para los mensajes que envía el usuario.
*/
