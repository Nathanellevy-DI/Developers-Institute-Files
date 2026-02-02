    import {createSlice} from "@reduxjs/toolkit";
    import type { PayloadAction } from "@reduxjs/toolkit";

    type ToDoType = {
        id: number;
        name: string;
        done: boolean;
    }

    type ToDoByDayType = {
        selectedDate: string;
        todosByDay: Record<string, ToDoType[]>
    };

    type AddToDoPayloadType = {
        day: string;
        text: string;
    };

    type RemoveToDoPayloadType = {
        day: string;
        id: number;
    }

    const todoByDay: ToDoByDayType = {
        selectedDate: "",
        todosByDay: {},
    }


    export const todoSlice = createSlice({
        name: "todos",
        initialState: todoByDay,
        reducers: {
            addToDo: (state, action: PayloadAction<AddToDoPayloadType>) =>
            {
                const { day, text } = action.payload;
                if (!state.todosByDay[day]) state.todosByDay[day] = [];

                state.todosByDay[day].push({
                    id: Date.now(),
                    name: text,
                    done: false
                })
            },
            removeToDo: (state, action: PayloadAction<RemoveToDoPayloadType>) => {
                const { day, id } = action.payload;
                if (state.todosByDay[day]) state.todosByDay[day].filter(todo => todo.id !== id)
            },
            toggleToDo: (state, action: PayloadAction<RemoveToDoPayloadType>) => {
                const { day, id } = action.payload;
                if (state.todosByDay[day]) state.todosByDay[day].map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
            }        }
    })

    export const {addToDo, removeToDo, toggleToDo} = todoSlice.actions;
    export default todoSlice.reducer;