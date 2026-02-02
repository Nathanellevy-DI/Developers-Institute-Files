import { configureStore } from '@reduxjs/toolkit';
import ageReducer from './ageSlice';

// Step 1: Set up Redux store (Thunk middleware is included by default)
export const store = configureStore({
    reducer: {
        age: ageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
