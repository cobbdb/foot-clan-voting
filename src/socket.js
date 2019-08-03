import { w3cwebsocket } from 'websocket';

export const connect = () => {
  const client = new w3cwebsocket('ws://www.dcobb.media:8080/', 'echo-protocol');

  client.onerror = () => {
    console.log('Connection Error');
  };

  client.onopen = () => {
    console.log('WebSocket Client Connected');
    if (client.readyState === client.OPEN) {
      const number = Math.round(Math.random() * 0xFFFFFF);
      client.send(number.toString());
    }
  };

  client.onclose = () => {
    console.log('echo-protocol Client Closed');
  };

  client.onmessage = ({ data }) => {
    if (typeof data === 'string') {
      console.log(`Received: '${data}'`);
    }
  };

  return client;
};
