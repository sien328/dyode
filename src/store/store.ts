import {compose, createStore, applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import { rootreducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [], //reducers
}

const middleWares:any = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

// (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
const composedEnchancer = compose;

const persistedReducer = persistReducer(persistConfig, rootreducer)

const composedEnchancers = composedEnchancer(applyMiddleware(...middleWares)); 

export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnchancers
);

export const persistor = persistStore(store);