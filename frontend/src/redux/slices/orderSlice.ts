import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
    order: string;
}

const initialState: OrderState = {
    order: '',
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder(state, action: PayloadAction<string>) {
            state.order = action.payload;
        },
    },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
