import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Step 2: Define User interface and state
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
}

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

// Step 3: Create Thunk Action Creator for fetching users
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data: User[] = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : 'An error occurred'
            );
        }
    }
);

// Step 2: Create User Slice with reducers
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Clear users
        clearUsers: (state) => {
            state.users = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle pending state
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Handle successful fetch
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = null;
            })
            // Handle failed fetch
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearUsers } = userSlice.actions;
export default userSlice.reducer;
