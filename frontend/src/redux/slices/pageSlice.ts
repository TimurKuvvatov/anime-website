import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface pageState {
    value: number;
}

const initialState: pageState = {
    value: 1,
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.value = action.payload;
        },
    },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
