// Implementa el código para guardar la API KEY en Local Storage
// Función para guardar la API Key en Local Storage guada los datosen el navegador
export const setApiKey = (key) => {  //setApiKey guatda la api
  localStorage.setItem("apiKey", key);
};
// Implementa el código para obtener la API KEY desde Local Storage
// Función para obtener la API Key desde Local Storage
export const getApiKey = () => {
  return localStorage.getItem("apiKey");
};

//localStorage es una api q permite almacenar datos en el navegador