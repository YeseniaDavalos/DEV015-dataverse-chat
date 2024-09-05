import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { navigateTo } from "../router.js";

const logoPath = 'img/Logo (1).png';

export const ChatIndividual = ({ id }) => {
  const { name, imageUrl = logoPath, shortDescription, description } = data.find(item => item.id === id) || {};
  
  const containerChat = document.createElement("div");
  containerChat.classList.add("chatIndividual"); 
  containerChat.innerHTML = `
    <div class="chat__title">
      <img class="chat__title__arrow" src="img/arrow-left.webp" alt="back arrow"/>
      <div class="chat__title__text"> 
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

