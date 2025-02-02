import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGenre } from '../../models/IGenre';

interface GenreState {
    genres: IGenre[];
}

const initialState: GenreState = {
    genres: [],
};

const genreSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleGenre(state, action: PayloadAction<IGenre>) {
            const existingGenreIndex = state.genres.findIndex(
                (genre) => genre.id === action.payload.id,
            );
            if (existingGenreIndex !== -1) {
                state.genres.splice(existingGenreIndex, 1);
            } else {
                state.genres.push(action.payload);
            }
        },
    },
});

export const { toggleGenre } = genreSlice.actions;
export default genreSlice.reducer;
