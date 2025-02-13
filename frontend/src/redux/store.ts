import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsApi } from '../services/newsApi';
import { animeApi } from '../services/animeApi';

import activeNewsReducer from './slices/activeNewsSlice';
import orderSlice from './slices/orderSlice';
import searchSlice from './slices/searchSlice';
import pageSlice from './slices/pageSlice';
import genreSlice from './slices/genreSlice';
import viewModeSlice from './slices/viewModeSlice';
import kindsSlice from './slices/kindsSlice';

const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
    activeNews: activeNewsReducer,
    order: orderSlice,
    search: searchSlice,
    page: pageSlice,
    genre: genreSlice,
    viewMode: viewModeSlice,
    kinds: kindsSlice,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(newsApi.middleware, animeApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
