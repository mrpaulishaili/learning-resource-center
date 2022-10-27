import { useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books`);

        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <main>
      <h1>Books</h1>

      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.price ? <div className="isPremium">🏆</div> : ''}

            {book.cover && <img src={book.cover} alt={book.title} />}
            <h3>{book.title}</h3>
            <p>{book.desc}</p>
            <div className="buttons">
              <button className="btn-success">Read</button>
              <span>📚</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Books;
