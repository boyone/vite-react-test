jest.mock('./CallService.js');
// import CallService from './CallService';
import { jest } from '@jest/globals';

test('call ky', async () => {
  const mockUsers = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
  ];
  const CallService = jest.fn(() => mockUsers);
  CallService.mockReturnValue(mockUsers);

  const users = CallService('https://jsonplaceholder.typicode.com/users');

  expect(users.length).toBe(2);
});
