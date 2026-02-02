import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import { selectAllCategories } from '../store/categoriesSlice';
import './AddTask.css';

const AddTask = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);

    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState(categories[0]?.id || 1);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addTask({
                title: title.trim(),
                categoryId: categoryId,
            }));
            setTitle('');
            setIsExpanded(false);
        }
    }, [dispatch, title, categoryId]);

    return (
        <div className="add-task">
            {!isExpanded ? (
                <button className="add-task-btn" onClick={() => setIsExpanded(true)}>
                    <span className="plus-icon">+</span>
                    Add New Task
                </button>
            ) : (
                <form onSubmit={handleSubmit} className="add-task-form">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="What do you need to do?"
                        className="task-input"
                        autoFocus
                    />
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(parseInt(e.target.value))}
                        className="category-select"
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <div className="form-buttons">
                        <button type="submit" className="submit-btn" disabled={!title.trim()}>
                            Add Task
                        </button>
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => {
                                setIsExpanded(false);
                                setTitle('');
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AddTask;
