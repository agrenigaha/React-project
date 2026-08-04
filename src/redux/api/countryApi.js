import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const countryApi = createApi({
  //Name of this Api reducer
  reducerPath: "countryApi",
  // This handles HTTP requests
  baseQuery: fetchBaseQuery({
    baseUrl: "https://countries.dev",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/countries",
    }),
  }),
  
});
export const { useGetCountriesQuery } = countryApi;
