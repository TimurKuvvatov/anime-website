import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveNewsState {
    activeNewsId: number;
}

const initialState: ActiveNewsState = {
    activeNewsId: 1,
};

const activeNewsSlice = createSlice({
    name: 'activeNews',
    initialState,
    reducers: {
        setActiveNews(state, action: PayloadAction<number>) {
            state.activeNewsId = action.payload;
        },
    },
});

export const { setActiveNews } = activeNewsSlice.actions;
export default activeNewsSlice.reducer;
