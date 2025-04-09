import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <Router>
      <div className="app">
        <h1>📚Кітап сөресі</h1>

        <Routes>
          <Route path="/" element={<Login onLogin={setBooks} />} />
          <Route path="/books" element={<BookList books={books} />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
