// __tests__/http.test.js
import { httpGet, httpPost } from '../http';

describe('httpGet', () => {
  test('should throw an error with the provided URL for httpGet', () => {
    const url = 'https://example.com';

    // Заменим использование fail на throw new Error
    expect(() => httpGet(url)).toThrow('httpGet should throw an error');
  });
});

describe('httpPost', () => {
  test('should throw an error with the provided URL for httpPost', () => {
    const url = 'https://example.com';

    // Заменим использование fail на throw new Error
    expect(() => httpPost(url)).toThrow('httpPost should throw an error');
  });
});
