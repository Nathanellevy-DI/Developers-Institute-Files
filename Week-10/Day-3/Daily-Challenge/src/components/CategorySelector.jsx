import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories, selectSelectedCategoryId, setSelectedCategory } from '../store/categoriesSlice';
import './CategorySelector.css';

const CategorySelector = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);
    const selectedCategoryId = useSelector(selectSelectedCategoryId);

    const handleCategorySelect = (categoryId) => {
        dispatch(setSelectedCategory(categoryId));
    };

    return (
        <div className="category-selector">
            <h3 className="selector-title">Categories</h3>
            <div className="category-buttons">
                <button
                    className={`category-btn ${selectedCategoryId === null ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(null)}
                >
                    <span className="category-dot" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}></span>
                    All Tasks
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-btn ${selectedCategoryId === category.id ? 'active' : ''}`}
                        onClick={() => handleCategorySelect(category.id)}
                        style={{ '--category-color': category.color }}
                    >
                        <span className="category-dot" style={{ backgroundColor: category.color }}></span>
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
