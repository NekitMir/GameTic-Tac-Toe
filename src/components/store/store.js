import { createStore } from 'redux';
import reducerGame from './reducers/reducer';

export const store = createStore(reducerGame);
