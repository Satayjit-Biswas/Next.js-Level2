import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        getNewses: builder.query({
            query: () => "/news",
        }),
        SingleNewses: builder.query({
            query: (id) => `/news/${id}`,
            
        }),
    }),
});

export const { useGetNewsesQuery ,useSingleNewsesQuery} = apiSlice;
