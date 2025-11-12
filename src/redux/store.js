// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import authReducer from './slices/authSlice';
import rootReducer from './reducers';


// Create MMKV instance
export const storage = new MMKV({
  id: 'redux-persist-storage',
});

// MMKV storage adapter for redux-persist
const mmkvStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value || null);
  },
  removeItem: (key) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

// Persist config
const persistConfig = {
  key: 'root',
  storage: mmkvStorage,
  whitelist: ['auth'] // Only persist auth slice (or add others)
};

// Persist the root reducer, not just authReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
export const persistor = persistStore(store);