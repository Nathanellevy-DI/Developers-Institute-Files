import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface TasksState {
    tasksByDate: Record<string, Task[]>;
    selectedDate: string;
}

// Helper to get today's date as YYYY-MM-DD
const getTodayString = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

const initialState: TasksState = {
    tasksByDate: {
        [getTodayString()]: [
            { id: '1', text: 'Welcome to Daily Planner!', completed: false },
            { id: '2', text: 'Add your first task', completed: false },
        ],
    },
    selectedDate: getTodayString(),
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setSelectedDate: (state, action: PayloadAction<string>) => {
            state.selectedDate = action.payload;
            // Initialize empty array for new dates
            if (!state.tasksByDate[action.payload]) {
                state.tasksByDate[action.payload] = [];
            }
        },
        addTask: (state, action: PayloadAction<{ date: string; text: string }>) => {
            const { date, text } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({
                id: Date.now().toString(),
                text,
                completed: false,
            });
        },
        editTask: (
            state,
            action: PayloadAction<{ date: string; id: string; text: string }>
        ) => {
            const { date, id, text } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find((t) => t.id === id);
                if (task) {
                    task.text = text;
                }
            }
        },
        deleteTask: (state, action: PayloadAction<{ date: string; id: string }>) => {
            const { date, id } = action.payload;
            if (state.tasksByDate[date]) {
                state.tasksByDate[date] = state.tasksByDate[date].filter(
                    (t) => t.id !== id
                );
            }
        },
        toggleTask: (state, action: PayloadAction<{ date: string; id: string }>) => {
            const { date, id } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find((t) => t.id === id);
                if (task) {
                    task.completed = !task.completed;
                }
            }
        },
    },
});

export const { setSelectedDate, addTask, editTask, deleteTask, toggleTask } =
    tasksSlice.actions;
export default tasksSlice.reducer;
