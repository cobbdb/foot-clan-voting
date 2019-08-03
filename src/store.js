import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/rootReducer';

export const history = createBrowserHistory();

const initialState = {};
const middleware = [routerMiddleware(history)];
const enhancers = [];

export const store = createStore(
  persistReducer(
    { key: 'foot-clan-voting', storage },
    createRootReducer(history),
  ),
  initialState,
  compose(applyMiddleware(...middleware), ...enhancers),
);

export const persistor = persistStore(store);
