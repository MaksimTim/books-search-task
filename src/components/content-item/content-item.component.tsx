import React from "react";
import "./content-item.styles.scss";
import { Item } from "../../models/books.models";

const ContentItem = ({ item }: { item: Item }) => {
  const { authors, title, categories, imageLinks } = item.volumeInfo;

  return (
    <div className="item-container">
      <div className="item-container__image">
        {imageLinks && (
          <img height={150} src={imageLinks.thumbnail} alt="image title" />
        )}
      </div>
      <div className="item-container__categories">{categories}</div>
      <div className="item-container__title">
        <b>{title}</b>
      </div>
      <div className="item-container__authors">{authors}</div>
    </div>
  );
};

export default ContentItem;
