// user.test.js
import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('loadUser should call httpGet with the correct URL and parse the response', () => {
  const userData = { id: 1, name: 'John Doe' };
  httpGet.mockReturnValue(JSON.stringify(userData));

  const response = loadUser(1);

  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
  expect(response).toEqual(userData);
});

test('saveUser should throw an error "Unimplemented"', () => {
  // Тест на случай, если вдруг saveUser будет вызвана в будущем
  expect(() => saveUser()).toThrow('Unimplemented');
});
