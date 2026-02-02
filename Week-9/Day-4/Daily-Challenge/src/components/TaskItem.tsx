import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleTask, deleteTask, editTask } from '../store/tasksSlice';
import type { Task } from '../store/tasksSlice';
import './TaskItem.css';

interface TaskItemProps {
    task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
    const dispatch = useAppDispatch();
    const selectedDate = useAppSelector((state) => state.tasks.selectedDate);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleToggle = () => {
        dispatch(toggleTask({ date: selectedDate, id: task.id }));
    };

    const handleDelete = () => {
        dispatch(deleteTask({ date: selectedDate, id: task.id }));
    };

    const handleEdit = () => {
        setEditText(task.text);
        setIsEditing(true);
    };

    const handleSave = () => {
        if (editText.trim()) {
            dispatch(editTask({ date: selectedDate, id: task.id, text: editText.trim() }));
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditText(task.text);
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <div className="task-edit">
                    <input
                        ref={inputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="edit-input"
                    />
                    <div className="edit-buttons">
                        <button onClick={handleSave} className="btn save-btn">💾</button>
                        <button onClick={handleCancel} className="btn cancel-btn">✖</button>
                    </div>
                </div>
            ) : (
                <div className="task-view">
                    <div className="task-content" onClick={handleToggle}>
                        <span className="checkbox">{task.completed ? '✅' : '⬜'}</span>
                        <span className="task-text">{task.text}</span>
                    </div>
                    <div className="task-actions">
                        <button onClick={handleEdit} className="btn edit-btn">✏️</button>
                        <button onClick={handleDelete} className="btn delete-btn">🗑️</button>
                    </div>
                </div>
            )}
        </li>
    );
}
