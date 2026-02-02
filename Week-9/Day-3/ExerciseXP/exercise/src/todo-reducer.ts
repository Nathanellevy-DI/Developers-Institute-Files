    import {createSlice} from "@reduxjs/toolkit";
    import type { PayloadAction } from "@reduxjs/toolkit";

    type ToDoType = {
        id: number;
        name: string;
        done: boolean;
    }

    const todos: ToDoType[] = [];

    export const todoSlice = createSlice({
        name: "todos",
        initialState: todos,
        reducers: {
            addToDo: (state, action: PayloadAction<string>) => state.concat({
                id: Date.now(),
                name: action.payload,
                done: false
            }),
            removeToDo: (state, action: PayloadAction<number>) =>
                state.filter(todo => todo.id !== action.payload),
            toggleToDo: (state, action: PayloadAction<number>) =>
                state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
        }
    })

    export const {addToDo, removeToDo, toggleToDo} = todoSlice.actions;
    export default todoSlice.reducer;