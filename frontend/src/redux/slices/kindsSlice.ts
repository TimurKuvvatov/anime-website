import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IKind } from '../../models/IKind';

interface KindsState {
    kinds: IKind[];
}

const initialState: KindsState = {
    kinds: [],
};

const kindsSlice = createSlice({
    name: 'kinds',
    initialState,
    reducers: {
        toggleKinds(state, action: PayloadAction<IKind>) {
            const existingKind = state.kinds.findIndex(kind => kind.name !== action.payload.name);
            if (existingKind !== 1) {
                state.kinds.splice(existingKind, 1)
            }
            else {
                state.kinds.push(action.payload);
            }
        },
    },
});


export const {toggleKinds} = kindsSlice.actions;
export default kindsSlice.reducer;