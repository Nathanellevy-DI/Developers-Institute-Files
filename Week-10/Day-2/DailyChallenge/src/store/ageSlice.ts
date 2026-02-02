import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Step 3: Define Age State
interface AgeState {
    age: number;
    loading: boolean;
}

const initialState: AgeState = {
    age: 25,
    loading: false,
};

// Step 2: Create async thunk for age up with simulated delay
export const ageUpAsync = createAsyncThunk(
    'age/ageUp',
    async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return 1; // increment by 1
    }
);

// Step 2: Create async thunk for age down with simulated delay
export const ageDownAsync = createAsyncThunk(
    'age/ageDown',
    async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return 1; // decrement by 1
    }
);

// Step 3: Create the Age Slice
const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle ageUpAsync
            .addCase(ageUpAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.age += action.payload;
            })
            .addCase(ageUpAsync.rejected, (state) => {
                state.loading = false;
            })
            // Handle ageDownAsync
            .addCase(ageDownAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.age = Math.max(0, state.age - action.payload); // Don't go below 0
            })
            .addCase(ageDownAsync.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default ageSlice.reducer;
