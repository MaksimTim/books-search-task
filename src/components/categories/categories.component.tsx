import React from "react";
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

const Categories: React.FC = () => {
  const { category } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div>
      Categories
      <select value={category} onChange={changeSelect}>
        {categories.map((categoryName, index) => (
          <option key={index}>{categoryName}</option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
