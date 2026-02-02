import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectSelectedCategoryId } from './categoriesSlice';

// Initial state for tasks
const initialState = {
    tasks: [
        { id: 1, title: 'Complete project proposal', categoryId: 1, completed: false, progress: 60, createdAt: Date.now() },
        { id: 2, title: 'Review code changes', categoryId: 1, completed: true, progress: 100, createdAt: Date.now() - 86400000 },
        { id: 3, title: 'Morning workout', categoryId: 3, completed: true, progress: 100, createdAt: Date.now() },
        { id: 4, title: 'Read 30 minutes', categoryId: 4, completed: false, progress: 50, createdAt: Date.now() },
        { id: 5, title: 'Grocery shopping', categoryId: 2, completed: false, progress: 0, createdAt: Date.now() },
        { id: 6, title: 'Learn Redux selectors', categoryId: 4, completed: true, progress: 100, createdAt: Date.now() - 172800000 },
        { id: 7, title: 'Team meeting preparation', categoryId: 1, completed: false, progress: 30, createdAt: Date.now() },
        { id: 8, title: 'Meditation session', categoryId: 3, completed: false, progress: 0, createdAt: Date.now() },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newId = Math.max(...state.tasks.map(t => t.id), 0) + 1;
            state.tasks.push({
                id: newId,
                title: action.payload.title,
                categoryId: action.payload.categoryId,
                completed: false,
                progress: 0,
                createdAt: Date.now(),
            });
        },
        editTask: (state, action) => {
            const { id, title, categoryId } = action.payload;
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                if (title !== undefined) task.title = title;
                if (categoryId !== undefined) task.categoryId = categoryId;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
        },
        updateTaskProgress: (state, action) => {
            const { id, progress } = action.payload;
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.progress = Math.min(100, Math.max(0, progress));
                task.completed = task.progress === 100;
            }
        },
        toggleTaskComplete: (state, action) => {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
                task.progress = task.completed ? 100 : 0;
            }
        },
    },
});

// Export actions
export const { addTask, editTask, deleteTask, updateTaskProgress, toggleTaskComplete } = tasksSlice.actions;

// Base selector
const selectTasksState = (state) => state.tasks;

// Memoized selector to get all tasks
export const selectAllTasks = createSelector(
    [selectTasksState],
    (tasksState) => tasksState.tasks
);

// Memoized selector for tasks by category
export const selectTasksByCategory = createSelector(
    [selectAllTasks, selectSelectedCategoryId],
    (tasks, selectedCategoryId) => {
        if (selectedCategoryId === null) {
            return tasks;
        }
        return tasks.filter(task => task.categoryId === selectedCategoryId);
    }
);

// Memoized selector for completed tasks count
export const selectCompletedTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter(task => task.completed).length
);

// Memoized selector for total tasks count
export const selectTotalTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.length
);

// Memoized selector for overall progress percentage
export const selectOverallProgress = createSelector(
    [selectAllTasks],
    (tasks) => {
        if (tasks.length === 0) return 0;
        const totalProgress = tasks.reduce((sum, task) => sum + task.progress, 0);
        return Math.round(totalProgress / tasks.length);
    }
);

// Memoized selector for tasks by specific category ID
export const selectTasksByCategoryId = createSelector(
    [selectAllTasks, (state, categoryId) => categoryId],
    (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export default tasksSlice.reducer;
