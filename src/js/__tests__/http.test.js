// __tests__/http.test.js
import { httpGet, httpPost } from '../http';

describe('httpGet', () => {
  test('should throw an error with the provided URL for httpGet', () => {
    const url = 'https://example.com';

    try {
      httpGet(url);
      // Если код дошел до этого места, то тест не прошел
      fail('httpGet should throw an error');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(url);
    }
  });
});

describe('httpPost', () => {
  test('should throw an error with the provided URL for httpPost', () => {
    const url = 'https://example.com';

    try {
      httpPost(url);
      // Если код дошел до этого места, то тест не прошел
      fail('httpPost should throw an error');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(url);
    }
  });
});
