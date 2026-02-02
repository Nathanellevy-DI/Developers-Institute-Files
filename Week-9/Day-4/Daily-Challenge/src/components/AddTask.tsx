import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTask } from '../store/tasksSlice';
import './AddTask.css';

export function AddTask() {
    const dispatch = useAppDispatch();
    const selectedDate = useAppSelector((state) => state.tasks.selectedDate);
    const [taskText, setTaskText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskText.trim()) {
            dispatch(addTask({ date: selectedDate, text: taskText.trim() }));
            setTaskText('');
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
                placeholder="✨ Add a new task for this day..."
                className="task-input"
            />
            <button type="submit" className="add-btn" disabled={!taskText.trim()}>
                ➕ Add
            </button>
        </form>
    );
}
