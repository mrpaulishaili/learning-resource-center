import { useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';
import { API_URL } from '../config/config';

const u = API_URL;

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`${u}/books`);

        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <main>
      <div className="books">
        {books?.map((book) => (
          <div className="book" key={book.id}>
            {book.price ? <div className="isPremium">🏆</div> : ''}

            {book.cover && <img src={book.cover} alt={book.title} />}
            <p>{book.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Books;
