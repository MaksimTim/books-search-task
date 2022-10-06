import React from "react";
import ContentItem from "../content-item/content-item.component";
import { useSelector } from "react-redux";
import {
  fetchBooksLoadMore,
  selectBooks,
  Status,
} from "../../redux/slices/google-books.slice";
import { selectFilter } from "../../redux/slices/filter.slice";
import { useAppDispatch } from "../../redux/store";
import "./content.styles.scss";

const Content: React.FC = () => {
  const { status, volumes, startIndex } = useSelector(selectBooks);
  const { sortBy, category, searchValue: search } = useSelector(selectFilter);
  const { items, totalItems } = volumes;
  const dispatch = useAppDispatch();

  const getVolumesMore = async () => {
    const categoryType = category !== "all" ? `+subject:${category}` : "";
    dispatch(fetchBooksLoadMore({ search, sortBy, categoryType, startIndex }));
  };

  const loadMoreClick = () => {
    getVolumesMore();
  };

  const volumesItems = items.map((item) => (
    <ContentItem item={item} key={item.id} />
  ));

  return (
    <div className="content-container">
      <h2>Total count: {totalItems}</h2>
      <div className="content-container__items">{volumesItems}</div>
      {status === Status.LOADING && <h2>Loading</h2>}
      {status === Status.ERROR && <h2>Some error</h2>}
      {totalItems !== 0 && (
        <div className="content-container__button" onClick={loadMoreClick}>
          <h2>Load more</h2>
        </div>
      )}
    </div>
  );
};

export default Content;
