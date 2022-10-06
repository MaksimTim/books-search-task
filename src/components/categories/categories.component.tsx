import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setCategory } from "../../redux/slices/filter.slice";

const categories: string[] = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const Categories = () => {
  const { category } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const chengeSelect = (event: any) => {
    dispatch(setCategory(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div>
      Categories
      <select value={category} onChange={chengeSelect}>
        {categories.map((catName, index) => (
          <option key={index}>{catName}</option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
