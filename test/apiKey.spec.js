import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

const API_KEY_STORAGE_NAME = 'apiKey';

describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    const mockApiKey = 'mock-api-key';
    localStorage.setItem(API_KEY_STORAGE_NAME, mockApiKey);

    const apiKey = getApiKey();
    expect(apiKey).toBe(mockApiKey);
  });
});

describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    const testApiKey = 'test-api-key';
    setApiKey(testApiKey);

    const storedApiKey = localStorage.getItem(API_KEY_STORAGE_NAME);
    expect(storedApiKey).toBe(testApiKey);
  });
});
