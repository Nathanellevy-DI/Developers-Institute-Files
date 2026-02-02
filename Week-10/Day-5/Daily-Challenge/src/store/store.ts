// Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import { recipeReducer, userReducer } from '../features/dataSlice';

// Configure the store with reducers
export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
    devTools: import.meta.env.DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
