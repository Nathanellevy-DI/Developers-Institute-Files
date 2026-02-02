import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import tasksReducer from './tasksSlice';

// Configure the Redux store with reducers for tasks and categories
const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
