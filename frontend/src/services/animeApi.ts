import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimeCart } from '../models/IAnimeCart';
import { IAnime } from '../models/IAnime';
import { IAnimeRelations } from '../models/IAnimeRelation';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shikimori.one/api/animes' }),
    endpoints: (builder) => ({
        getAllAnimes: builder.query<
            IAnimeCart[],
            { limit: number; search?: string; order?: string; page?: number; genre?: number[] }
        >({
            query: ({ limit, search, order, page, genre }) => ({
                url: '',
                params: {
                    limit,
                    order,
                    search,
                    page,
                    genre,
                },
            }),
        }),
        getAnime: builder.query<IAnime, number>({
            query: (id) => ({
                url: `/${id}`,
            }),
        }),
        getAnimeRelations: builder.query<IAnimeRelations[], number>({
            query: (id) => ({
                url: `/${id}/related`,
            }),
        }),
    }),
});

export const { useGetAllAnimesQuery } = animeApi;
