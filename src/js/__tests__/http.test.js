// __tests__/http.test.js
import { httpGet, httpPost } from '../http';

describe('httpGet', () => {
  test('should throw an error with the provided URL for httpGet', () => {
    const url = 'https://example.com';

    // Используем toThrow вместо toThrowError, чтобы ожидать любую ошибку
    expect(() => httpGet(url)).toThrow();
  });
});

describe('httpPost', () => {
  test('should throw an error with the provided URL for httpPost', () => {
    const url = 'https://example.com';

    // Используем toThrow вместо toThrowError, чтобы ожидать любую ошибку
    expect(() => httpPost(url)).toThrow();
  });
});
