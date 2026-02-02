import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../store/tasksSlice';
import { selectAllCategories, selectSelectedCategoryId } from '../store/categoriesSlice';
import { editTask, deleteTask, updateTaskProgress, toggleTaskComplete } from '../store/tasksSlice';
import './TaskList.css';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasksByCategory);
    const categories = useSelector(selectAllCategories);
    const selectedCategoryId = useSelector(selectSelectedCategoryId);

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');

    // Find category by ID
    const getCategoryById = useCallback((categoryId) => {
        return categories.find(c => c.id === categoryId);
    }, [categories]);

    // Handle task completion toggle using useCallback
    const handleToggleComplete = useCallback((taskId) => {
        dispatch(toggleTaskComplete(taskId));
    }, [dispatch]);

    // Handle task editing using useCallback
    const handleStartEdit = useCallback((task) => {
        setEditingTaskId(task.id);
        setEditingTitle(task.title);
    }, []);

    const handleSaveEdit = useCallback((taskId) => {
        if (editingTitle.trim()) {
            dispatch(editTask({ id: taskId, title: editingTitle.trim() }));
        }
        setEditingTaskId(null);
        setEditingTitle('');
    }, [dispatch, editingTitle]);

    const handleCancelEdit = useCallback(() => {
        setEditingTaskId(null);
        setEditingTitle('');
    }, []);

    // Handle task deletion using useCallback
    const handleDeleteTask = useCallback((taskId) => {
        dispatch(deleteTask(taskId));
    }, [dispatch]);

    // Handle progress update using useCallback
    const handleProgressChange = useCallback((taskId, progress) => {
        dispatch(updateTaskProgress({ id: taskId, progress: parseInt(progress) }));
    }, [dispatch]);

    // Get selected category name for display
    const selectedCategory = selectedCategoryId
        ? categories.find(c => c.id === selectedCategoryId)?.name
        : 'All Tasks';

    return (
        <div className="task-list">
            <div className="task-list-header">
                <h3 className="list-title">📋 {selectedCategory}</h3>
                <span className="task-count">{tasks.length} task{tasks.length !== 1 ? 's' : ''}</span>
            </div>

            {tasks.length === 0 ? (
                <div className="no-tasks">
                    <p>No tasks in this category yet.</p>
                </div>
            ) : (
                <div className="tasks-container">
                    {tasks.map((task) => {
                        const category = getCategoryById(task.categoryId);
                        return (
                            <div
                                key={task.id}
                                className={`task-card ${task.completed ? 'completed' : ''}`}
                                style={{ '--task-color': category?.color || '#667eea' }}
                            >
                                <div className="task-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleComplete(task.id)}
                                        id={`task-${task.id}`}
                                    />
                                    <label htmlFor={`task-${task.id}`}></label>
                                </div>

                                <div className="task-content">
                                    {editingTaskId === task.id ? (
                                        <div className="edit-form">
                                            <input
                                                type="text"
                                                value={editingTitle}
                                                onChange={(e) => setEditingTitle(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleSaveEdit(task.id);
                                                    if (e.key === 'Escape') handleCancelEdit();
                                                }}
                                                autoFocus
                                                className="edit-input"
                                            />
                                            <div className="edit-buttons">
                                                <button onClick={() => handleSaveEdit(task.id)} className="save-btn">✓</button>
                                                <button onClick={handleCancelEdit} className="cancel-btn">✕</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="task-info">
                                                <span className={`task-title ${task.completed ? 'strikethrough' : ''}`}>
                                                    {task.title}
                                                </span>
                                                <span
                                                    className="task-category-tag"
                                                    style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
                                                >
                                                    {category?.name}
                                                </span>
                                            </div>
                                            <div className="progress-container">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={task.progress}
                                                    onChange={(e) => handleProgressChange(task.id, e.target.value)}
                                                    className="progress-slider"
                                                    style={{ '--progress': `${task.progress}%`, '--progress-color': category?.color }}
                                                />
                                                <span className="progress-value">{task.progress}%</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="task-actions">
                                    <button
                                        onClick={() => handleStartEdit(task)}
                                        className="action-btn edit"
                                        title="Edit task"
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        onClick={() => handleDeleteTask(task.id)}
                                        className="action-btn delete"
                                        title="Delete task"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TaskList;
