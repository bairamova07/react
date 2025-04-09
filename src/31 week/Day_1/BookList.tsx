import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books"
        );
        setBooks(response.data);
      } catch (err) {
        setError("Мәліметтер жүктелмеді");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (isLoading) return <div>Жүктелуде...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="book-card">
            <img
              src={
                book.Poster
                  ? book.Poster
                  : "https://via.placeholder.com/300x450?text=No+Poster"
              }
              alt={book.Title}
              className="book-poster"
            />
            <div className="book-info">
              <h3>{book.Title}</h3>
              <p>{book.Year}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Кітаптар табылмады</p>
      )}
    </div>
  );
};

export default BookList;
