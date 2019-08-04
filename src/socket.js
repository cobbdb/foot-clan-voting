import { w3cwebsocket } from 'websocket';
import { store } from './store';

export let socket = false;

export const connect = () => {
  const client = new w3cwebsocket('ws://www.dcobb.media:8080/', 'echo-protocol');

  client.onerror = () => {
    console.log('Connection Error');
  };

  client.onopen = () => {
    console.log('WebSocket Client Connected');
    if (client.readyState === client.OPEN) {
      store.dispatch({ type: 'SOCKET_OPEN' });
    }
  };

  client.onclose = (event) => {
    console.log('echo-protocol Client Closed');
    store.dispatch({ type: 'SOCKET_ERROR', code: event.code });
  };

  client.onmessage = ({ data }) => {
    if (typeof data === 'string') {
      const toons = JSON.parse(data);
      console.log(`Received: ${toons}`);
      toons.forEach((toon) => {
        store.dispatch({ type: 'LOAD_TOON', toon });
      });
    }
  };

  socket = client;
  return client;
};
