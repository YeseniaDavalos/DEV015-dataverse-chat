// Implementa el código para obtener la API KEY desde Local Storage
// Función para obtener la API Key desde Local Storage

const API_KEY_STORAGE_NAME = 'apiKey';

export const getApiKey = () => {
  return localStorage.getItem(API_KEY_STORAGE_NAME);
};


// Implementa el código para guardar la API KEY en Local Storage
// Función para guardar la API Key en Local Storage

export const setApiKey = (key) => {
  localStorage.setItem(API_KEY_STORAGE_NAME, key);
};
