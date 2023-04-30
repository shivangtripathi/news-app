import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import favouritesReducer from './reducer';

const persistConfig = {
  key: 'favourites',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, favouritesReducer)

export const store = createStore(persistedReducer);

export const persistor = persistStore(store)