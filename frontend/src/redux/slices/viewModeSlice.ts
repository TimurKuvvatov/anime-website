import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ViewModeType } from '../../types/ViewModeType';

interface viewModeState {
    value: ViewModeType;
}

const initialState: viewModeState = {
    value: 'list',
};

const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        setView(state, action: PayloadAction<ViewModeType>) {
            state.value = action.payload;
        },
    },
});

export const { setView } = viewModeSlice.actions;
export default viewModeSlice.reducer;
