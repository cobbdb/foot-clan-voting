import { socket } from '../socket';

export const setResponse = (username, response) => {
  const data = { username, ...response };
  const body = JSON.stringify(data);
  socket.send(`PUT/USER/${data.username}/${body}`);
};

export const getUsers = () => {
  socket.send('GET/USERS');
};
