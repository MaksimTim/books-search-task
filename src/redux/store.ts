import { configureStore } from "@reduxjs/toolkit";
import googleBooksReducer from "./slices/google-books.slice";
import filterReducer from "./slices/filter.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    googleBooks: googleBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
