/* 
  using store in redux-toolkit 
  redux thunk no need install because include from redux-toolkit
*/

import { configureStore } from "@reduxjs/toolkit";
import carReducer from './features/Cars/carSlice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, carReducer )

export const store = configureStore({
    reducer: {
        cars: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      devTools: process.env.NODE_ENV === 'production',
  })
