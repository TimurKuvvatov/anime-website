import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimeCart } from '../models/IAnimeCart';
import { IAnime } from '../models/IAnime';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shikimori.one/api/animes' }),
    endpoints: (builder) => ({
        getAllAnimes: builder.query<IAnimeCart[], { limit: number; search?: string, order?: string }>({
            query: ({ limit, search, order }) => ({
                url: '',
                params: {
                    limit,
                    order,
                    search,
                },
            }),
        }),
        getAnime: builder.query<IAnime, number>({
            query: (id) => ({
                url: `/${id}`,
            }),
        }),
    }),
});
