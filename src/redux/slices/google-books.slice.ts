import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RootBooks } from "../../models/books.models";
import axios from "axios";

const apiKey = "AIzaSyB9kVoEyJPjJAm4_j7mLz6_77qiAExfrNw";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface InitialBooksState {
  volumes: RootBooks;
  status: Status;
  startIndex: number;
  maxResults: number;
}

interface fetchArgs {
  search: string;
  sortBy: string;
  categoryType: string;
}

interface fetchArgsLoad extends fetchArgs {
  startIndex: number;
}

const initialState: InitialBooksState = {
  volumes: {
    items: [],
    kind: "",
    totalItems: 0,
  },
  status: Status.SUCCESS,
  maxResults: 30,
  startIndex: 30,
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (params: fetchArgs) => {
    const { search, sortBy, categoryType } = params;
    const { data } = await axios.get<RootBooks>(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${categoryType}&orderBy=${sortBy}&maxResults=30&key=${apiKey}`
    );
    return data;
  }
);

export const fetchBooksLoadMore = createAsyncThunk(
  "books/fetchBooksLoadMore",
  async (params: fetchArgsLoad) => {
    const { search, sortBy, categoryType, startIndex } = params;
    const { data } = await axios.get<RootBooks>(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${categoryType}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=30&key=${apiKey}`
    );
    return data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.volumes.items = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.volumes.items = action.payload.items;
      state.volumes.totalItems = action.payload.totalItems;
      state.volumes.kind = action.payload.kind;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.volumes.items = [];
    });
    builder.addCase(fetchBooksLoadMore.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBooksLoadMore.fulfilled, (state, action) => {
      state.volumes.items = state.volumes.items.concat(action.payload.items);
      state.startIndex += state.maxResults;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBooksLoadMore.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export default booksSlice.reducer;

export const selectBooks = (state: RootState) => state.googleBooks;
