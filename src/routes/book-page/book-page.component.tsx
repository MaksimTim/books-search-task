import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooks } from "../../redux/slices/google-books.slice";
import "./book-page.styles.scss";
import { Item } from "../../models/books.models";

const BookPage: React.FC = () => {
  const { id } = useParams();
  const { volumes } = useSelector(selectBooks);

  const newItem = volumes.items.find((obj) => obj.id === id);
  const { volumeInfo } = newItem as Item;

  return (
    <div className="book-page">
      <div className="book-page__block">
        <div className="book-page__image">
          {volumeInfo.imageLinks && (
            <img
              height={170}
              src={volumeInfo.imageLinks.thumbnail}
              alt="image title"
            />
          )}
        </div>
        <div>
          <h2>{volumeInfo.title}</h2>
          <div>
            <b>Categories:</b> {volumeInfo.categories}
          </div>
          <div>
            <b>Authors:</b>
            {volumeInfo.authors}
          </div>
          <div>
            <b>Published Date:</b>
            {volumeInfo.publishedDate}
          </div>
          <div>
            <b>Page Count:</b>
            {volumeInfo.pageCount}
          </div>
        </div>
      </div>
      <div className="book-page__block">
        {volumeInfo.description && volumeInfo.description}
      </div>
      <div className="book-page__block">
        {volumeInfo.infoLink && (
          <a href={volumeInfo.infoLink}>Link to google books</a>
        )}
      </div>
    </div>
  );
};

export default BookPage;
