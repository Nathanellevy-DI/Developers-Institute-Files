// Redux slice for managing generic data state

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DataState, RecipeSearchResult, User } from '../types/types';
import { fetchRecipes, fetchUsers } from '../api/api';

// Recipe state
interface RecipeState extends DataState<RecipeSearchResult> { }

const initialRecipeState: RecipeState = {
    data: null,
    loading: false,
    error: null,
};

// User state
interface UserState extends DataState<User[]> { }

const initialUserState: UserState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk for fetching recipes
export const fetchRecipesThunk = createAsyncThunk<RecipeSearchResult, void, { rejectValue: string }>(
    'recipes/fetchRecipes',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchRecipes();
            return data;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to fetch recipes';
            return rejectWithValue(errorMessage);
        }
    }
);

// Async thunk for fetching users
export const fetchUsersThunk = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchUsers();
            return data;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to fetch users';
            return rejectWithValue(errorMessage);
        }
    }
);

// Recipe slice
export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: initialRecipeState,
    reducers: {
        clearRecipes: (state) => {
            state.data = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipesThunk.fulfilled, (state, action: PayloadAction<RecipeSearchResult>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchRecipesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

// User slice
export const userSlice = createSlice({
    name: 'users',
    initialState: initialUserState,
    reducers: {
        clearUsers: (state) => {
            state.data = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsersThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error occurred';
            });
    },
});

// Export actions
export const { clearRecipes } = recipeSlice.actions;
export const { clearUsers } = userSlice.actions;

// Export reducers
export const recipeReducer = recipeSlice.reducer;
export const userReducer = userSlice.reducer;
