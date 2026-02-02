import { useState, useRef, useEffect } from 'react';
import type { Task } from '../context/TaskContext';
import { useTaskContext } from '../context/TaskContext';
import './TaskItem.css';

interface TaskItemProps {
    task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
    const { dispatch } = useTaskContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when entering edit mode using useRef
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
    };

    const handleEdit = () => {
        setEditText(task.text);
        setIsEditing(true);
    };

    const handleSave = () => {
        if (editText.trim()) {
            dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: editText.trim() } });
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
                        <button onClick={handleSave} className="btn save-btn">
                            💾 Save
                        </button>
                        <button onClick={handleCancel} className="btn cancel-btn">
                            ✖ Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="task-view">
                    <div className="task-content" onClick={handleToggle}>
                        <span className="checkbox">{task.completed ? '✅' : '⬜'}</span>
                        <span className="task-text">{task.text}</span>
                    </div>
                    <div className="task-actions">
                        <button onClick={handleEdit} className="btn edit-btn">
                            ✏️ Edit
                        </button>
                        <button onClick={handleDelete} className="btn delete-btn">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
}
