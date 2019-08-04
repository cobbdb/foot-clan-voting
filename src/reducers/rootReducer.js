import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import socket from './socket';
import toons from './toons';

export default history => combineReducers({
  router: connectRouter(history),
  socket,
  toons,
});
