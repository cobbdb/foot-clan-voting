import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import agents from './agents';

export default history => combineReducers({
  router: connectRouter(history),
  // agents,
});
