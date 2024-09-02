import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    const mockApiKey = 'mock-api-key';
    localStorage.setItem("apiKey", mockApiKey);
    const apiKey = getApiKey();
    expect(apiKey).toBe(mockApiKey);
  });
});
describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    const testApiKey = 'test-api-key';
    setApiKey(testApiKey);
    const storedApiKey = localStorage.getItem("apiKey");
    expect(storedApiKey).toBe(testApiKey);
  });
});

/*
import { getApiKey, setApiKey } from '../src/lib/apiKey.js'; 

describe('setApiKey', () => {
  it('debería establecer correctamente la API Key en localStorage', () => {
    // Simular el almacenamiento en localStorage
    const key = 'test-api-key';
    setApiKey(key);
    expect(localStorage.getItem('apiKey')).toBe(key);
  });
});

describe('getApiKey', () => {
  beforeEach(() => {
    localStorage.clear(); // Limpiar localStorage antes de cada test
  });

  it('debería devolver el valor de la API Key desde localStorage', () => {
    // Configurar una clave de API en localStorage
    const key = 'test-api-key';
    localStorage.setItem('apiKey', key);
    
    const apiKey = getApiKey();
    expect(apiKey).toBe(key);
  });

  it('debería lanzar un error si la API Key no está definida en localStorage', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('invalid-key');
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const apiKey = getApiKey();
    expect(apiKey).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Api Key invalida, por favor ingresa una Open AI api key');
  });
});
*/