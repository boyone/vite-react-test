import ky from "ky-universal";

test('call ky', async () => {
  const users = await ky.get('https://jsonplaceholder.typicode.com/users').json();
  
  expect(users.length).toBe(10);
});