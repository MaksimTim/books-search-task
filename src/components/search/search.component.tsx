import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../redux/slices/google-books.slice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectFilter, setSearchValue } from "../../redux/slices/filter.slice";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");
  const { sortBy, category } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const getVolumes = async () => {
    const categoryType = category !== "all" ? `+subject:${category}` : "";

    dispatch(fetchBooks({ search, sortBy, categoryType }));
  };

  const clickHandler = async () => {
    getVolumes();
    dispatch(setSearchValue(search));
  };

  return (
    <>
      <input
        onKeyDown={(e) => e.key === "Enter" && clickHandler()}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search..."
      />
      <button onClick={clickHandler}>Search</button>
    </>
  );
};

export default Search;
