import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`
        );
        setBook(response.data);
      } catch (err) {
        setError("Мәліметтер табылмады");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (isLoading) return <div>Жүктелуде...</div>;
  if (error) return <div>{error}</div>;
  if (!book) return <div>Кітап табылмады</div>;

  return (
    <div className="book-detail-container">
      <img
        src={
          book.Poster
            ? book.Poster
            : "https://via.placeholder.com/400x600?text=No+Poster"
        }
        alt={book.Title}
        className="book-detail-poster"
      />

      <div className="book-detail-info">
        <h1>
          {book.Title} ({book.Year})
        </h1>
        <p>{book.Description}</p>
        <p>
          <strong>Author:</strong> {book.Author}
        </p>
        <p>
          <strong>Genre:</strong> {book.Genre}
        </p>

        <Link to="/" className="back-button">
          ⬅️ Артқа қайту
        </Link>
      </div>
    </div>
  );
};

export default BookDetail;
