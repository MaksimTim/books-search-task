import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = 'AIzaSyB9kVoEyJPjJAm4_j7mLz6_77qiAExfrNw';

export const googleBooksApi = createApi({
    reducerPath: "googleBooksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.googleapis.com/books/v1/",
    }),
    endpoints: (build) => ({
        getVolumes: build.query({
            query: (searchParam) => ({
                url: "volumes",
                params: {
                    q: searchParam,
                    maxResults: 10,
                    key: apiKey,
                    /*orderBy: queryParams.orderBy,*/
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


export const { useLazyGetVolumesQuery, useGetBookQuery  } = googleBooksApi
