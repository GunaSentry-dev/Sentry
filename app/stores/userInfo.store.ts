import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import userInfoReducer from './userInfoReducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: "root",
    storage:storage,
    version: 1,
  };


 const rootReducer = combineReducers({ 
    userInfo: userInfoReducer,
  }) 
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: (import.meta.env.SSR ? rootReducer : persistedReducer) as Reducer<any>,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = !import.meta.env.SSR ? persistStore(store) : null;

// Export types for use in components
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
