import { useState, useRef, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import './AddTask.css';

export function AddTask() {
    const { dispatch } = useTaskContext();
    const [taskText, setTaskText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus input on mount using useRef
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskText.trim()) {
            dispatch({ type: 'ADD_TASK', payload: taskText.trim() });
            setTaskText('');
            // Re-focus input after adding task
            inputRef.current?.focus();
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="✨ Add a new task..."
                className="task-input"
            />
            <button type="submit" className="add-btn" disabled={!taskText.trim()}>
                ➕ Add Task
            </button>
        </form>
    );
}
