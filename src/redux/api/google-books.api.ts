import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = 'AIzaSyB9kVoEyJPjJAm4_j7mLz6_77qiAExfrNw';

export const googleBooksApi = createApi({
    reducerPath: "googleBooksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.googleapis.com/books/v1/",
    }),
    endpoints: (build) => ({
        getVolumes: build.query({
            query: (queryParams) => ({
                url: "volumes",
                params: {
                    key: apiKey,
                    maxResults: 30,
                    q: queryParams.searchParam,
                    orderBy: queryParams.orderBy,
                },
            }),
        }),
        getBook: build.query({
            query: (volumeId) => ({
                url: `volumes/${volumeId}`,
                params: {
                    key: apiKey,
                },
            }),
        }),
    }),
});


export const { useLazyGetVolumesQuery, useGetBookQuery } = googleBooksApi