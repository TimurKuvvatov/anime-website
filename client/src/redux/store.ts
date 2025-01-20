import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsApi } from '../services/newsApi';
import activeNewsReducer from './slices/activeNewsSlice';
const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
    activeNews: activeNewsReducer,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
