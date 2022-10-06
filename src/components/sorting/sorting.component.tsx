import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setSort } from "../../redux/slices/filter.slice";

const sortType: string[] = ["relevance", "newest"];

const Sorting = () => {
  const { sortBy } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeSelect = (event: any) => {
    dispatch(setSort(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div>
      Sorting by
      <select value={sortBy} onChange={changeSelect}>
        {sortType.map((sortName, index) => (
          <option key={index}>{sortName}</option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
