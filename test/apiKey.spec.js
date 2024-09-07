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