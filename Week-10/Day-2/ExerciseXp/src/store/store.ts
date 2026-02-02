import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Step 1: Initialize Store with Thunk Middleware (included by default in RTK)
export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    // Redux Thunk middleware is included by default with configureStore
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
