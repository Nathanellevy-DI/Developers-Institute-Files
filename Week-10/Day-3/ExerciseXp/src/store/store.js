import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

// Configure the Redux store with necessary middleware and reducers
const store = configureStore({
    reducer: {
        books: booksReducer,
    },
    // Redux Toolkit automatically includes redux-thunk and other middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
