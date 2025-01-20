import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INews } from '../models/INews';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/news' }),
    endpoints: (builder) => ({
        getNews: builder.query<INews[], void>({
            query: () => '',
        }),
        createNews: builder.mutation<INews, Partial<INews>>({
            query: (newNews) => ({
                url: '',
                method: 'POST',
                body: newNews,
            }),
        }),
    }),
});
