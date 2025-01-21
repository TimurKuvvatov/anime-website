import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INews } from '../models/INews';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://anime-website-timurkuvvatov.vercel.app/api/news',
    }),
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
