import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  sortBy: "relevance",
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
