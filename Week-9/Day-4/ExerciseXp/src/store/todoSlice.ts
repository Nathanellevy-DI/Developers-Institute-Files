import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Step 1: Define Todo interface and initial state
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [
        { id: '1', text: 'Learn Redux Toolkit', completed: false },
        { id: '2', text: 'Build a Todo App', completed: false },
        { id: '3', text: 'Master React-Redux', completed: true },
    ],
};

// Step 1: Create Todo Slice with reducers
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Add a new todo
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: Date.now().toString(),
                text: action.payload,
                completed: false,
            });
        },
        // Toggle a todo's completion status
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        // Remove a todo
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
