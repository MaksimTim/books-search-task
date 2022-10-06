import React from "react";
import "./header-search.styles.scss";
import Categories from "../categories/categories.component";
import Sorting from "../sorting/sorting.component";
import Search from "../search/search.component";

const HeaderSearch = () => {
  return (
    <div className="header-container">
      <h1>Search for books</h1>
      <div className="header-container__search">
        <Search />
      </div>
      <div className="header-container__sorting">
        <Categories />
        <Sorting />
      </div>
    </div>
  );
};

export default HeaderSearch;
