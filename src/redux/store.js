import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { filterReduser } from './filterSlice';
import { contactReduser } from './contactsSlice';
import { userReduser } from './userSlice';

const persistConfig = {
  key: 'auhtentific',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  contacts: contactReduser,
  filter: filterReduser,
  auth: persistReducer(persistConfig, userReduser),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
