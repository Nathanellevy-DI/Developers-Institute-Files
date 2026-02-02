import { createSlice, createSelector } from '@reduxjs/toolkit';

// Initial state for categories
const initialState = {
    categories: [
        { id: 1, name: 'Work', color: '#667eea' },
        { id: 2, name: 'Personal', color: '#f093fb' },
        { id: 3, name: 'Health', color: '#4facfe' },
        { id: 4, name: 'Learning', color: '#43e97b' },
    ],
    selectedCategoryId: null, // null means "All Categories"
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const newId = Math.max(...state.categories.map(c => c.id), 0) + 1;
            state.categories.push({
                id: newId,
                name: action.payload.name,
                color: action.payload.color || '#667eea',
            });
        },
        editCategory: (state, action) => {
            const { id, name, color } = action.payload;
            const category = state.categories.find(c => c.id === id);
            if (category) {
                if (name) category.name = name;
                if (color) category.color = color;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(c => c.id !== action.payload);
            if (state.selectedCategoryId === action.payload) {
                state.selectedCategoryId = null;
            }
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategoryId = action.payload;
        },
    },
});

// Export actions
export const { addCategory, editCategory, deleteCategory, setSelectedCategory } = categoriesSlice.actions;

// Base selector
const selectCategoriesState = (state) => state.categories;

// Memoized selector to get all categories
export const selectAllCategories = createSelector(
    [selectCategoriesState],
    (categoriesState) => categoriesState.categories
);

// Memoized selector to get selected category ID
export const selectSelectedCategoryId = createSelector(
    [selectCategoriesState],
    (categoriesState) => categoriesState.selectedCategoryId
);

// Memoized selector to get category by ID
export const selectCategoryById = createSelector(
    [selectAllCategories, (state, categoryId) => categoryId],
    (categories, categoryId) => categories.find(c => c.id === categoryId)
);

export default categoriesSlice.reducer;
