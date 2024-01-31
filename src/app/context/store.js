import { legacy_createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import productReducer from './storeReducer';

const store = legacy_createStore(productReducer, applyMiddleware(thunk));

export default store;
