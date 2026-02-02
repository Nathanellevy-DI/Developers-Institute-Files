import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

// Types
export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

interface TaskState {
    tasks: Task[];
    filter: FilterType;
}

type TaskAction =
    | { type: 'ADD_TASK'; payload: string }
    | { type: 'TOGGLE_TASK'; payload: number }
    | { type: 'DELETE_TASK'; payload: number }
    | { type: 'EDIT_TASK'; payload: { id: number; text: string } }
    | { type: 'SET_FILTER'; payload: FilterType };

interface TaskContextType {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
    filteredTasks: Task[];
}

// Reducer function
function taskReducer(state: TaskState, action: TaskAction): TaskState {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                    },
                ],
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, text: action.payload.text }
                        : task
                ),
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
}

// Initial state
const initialState: TaskState = {
    tasks: [
        { id: 1, text: 'Learn React Hooks', completed: true },
        { id: 2, text: 'Master useContext', completed: false },
        { id: 3, text: 'Practice useReducer', completed: false },
    ],
    filter: 'all',
};

// Context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provider component
export function TaskProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    // Filter tasks based on current filter
    const filteredTasks = state.tasks.filter((task) => {
        switch (state.filter) {
            case 'active':
                return !task.completed;
            case 'completed':
                return task.completed;
            default:
                return true;
        }
    });

    return (
        <TaskContext.Provider value={{ state, dispatch, filteredTasks }}>
            {children}
        </TaskContext.Provider>
    );
}

// Custom hook to use the context
export function useTaskContext() {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
}
