// Implementa el código para guardar la API KEY en Local Storage
// Función para guardar la API Key en Local Storage
export const setApiKey = (key) => {
  localStorage.setItem("apiKey", key);
};
// Implementa el código para obtener la API KEY desde Local Storage
// Función para obtener la API Key desde Local Storage
export const getApiKey = () => {
  return localStorage.getItem("apiKey");
};