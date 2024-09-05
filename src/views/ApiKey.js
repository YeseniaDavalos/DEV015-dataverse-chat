import { navigateTo } from "../router.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";

export function ApiKey() {
  const apiKeyView = document.createElement("div");
  apiKeyView.classList.add("apiKey");

  document.title = "ApiKey";

  let faviconElement = document.querySelector("[type='image/x-icon']");
  if (!faviconElement) {
    faviconElement = document.createElement('link');
    faviconElement.rel = 'icon';
    faviconElement.type = 'image/x-icon';
    document.head.appendChild(faviconElement);
  }
  faviconElement.href = "assets/logos/logo-color.svg";

  apiKeyView.innerHTML = `
      <div class="containerForm">
        <div class="containerForm__logo">
            <img src="img/Logo (1).png" alt="Logo" class="containerForm__logo__image">
            <h1 class="containerForm__logo__title">Api Key Admin</h1>
        </div>
        <p class="containerForm__description">From here you can manage the API Key to use</p>
        <label for="apikey" class="containerForm__label">API KEY</label>
        <input type="text" class="containerForm__input" id="apikey" placeholder="Ingresa tu API KEY" required/>
        <div class="containerForm__button">
            <button id="button__clear">Borrar</button>
            <button id="button__save">Guardar</button>
        </div>
        <button id="button__back">Volver a Inicio</button>
        <div class="containerForm__link">
            <p class="containerForm__link__text">¿Aún no tienes tu ApiKey?</p>
            <a class="containerForm__link__open" href="https://openai.com/" target="_blank">Genera tu ApiKey</a>
        </div>
      </div>
  `;
  setTimeout(() => {
    const inputElement = document.getElementById("apikey");
    const buttonSave = document.getElementById("button__save");
    const buttonBack = document.getElementById("button__back");
    const buttonClear = document.getElementById("button__clear");
    const containerForm = document.querySelector(".containerForm");

    if (!containerForm || !inputElement) {
      return;
    }

    const inputMessage = document.createElement("span");
    inputMessage.classList.add("input__message");
    containerForm.insertBefore(inputMessage, inputElement);

    const updateMaskedApiKey = (apiKey) => {
      return `${apiKey.slice(0, 3)}${"•".repeat(apiKey.length - 6)}${apiKey.slice(-3)}`;
    };

    let APIKEY = getApiKey();
    if (APIKEY) {
      inputElement.value = updateMaskedApiKey(APIKEY);
    }

    buttonSave.addEventListener("click", () => {
      APIKEY = inputElement.value;

      if (APIKEY.length >= 10) {
        setApiKey(APIKEY);
        inputElement.value = updateMaskedApiKey(APIKEY);
        inputMessage.textContent = "¡API key guardada con éxito!";
      } else {
        inputMessage.textContent = `La API key debe tener al menos 10 caracteres.`;
      }
    });

    buttonClear.addEventListener("click", () => {
      localStorage.removeItem("APIKEY");
      inputElement.value = "";
      inputMessage.textContent = "¡API key borrada con éxito!";
    });

    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  }, 0);

  return apiKeyView;
}
