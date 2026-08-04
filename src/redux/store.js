import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import {countryApi} from "./api/countryApi";
export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]:
    countryApi.reducer,
    theme: themeReducer,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(
      countryApi.middleware
    )
});