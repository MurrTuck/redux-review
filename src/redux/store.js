import { createStore } from 'redux';
import moviesReducer from './reducers/moviesReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default createStore(moviesReducer, devToolsEnhancer());