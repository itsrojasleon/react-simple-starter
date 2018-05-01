import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(),
);
export default store;
