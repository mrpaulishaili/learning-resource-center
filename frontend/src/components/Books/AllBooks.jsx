import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/config';

const u = API_URL;

const AllBooks = () => {
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
    <div className="books">
      {books?.map((book) => (
        <div className="book" key={book.id}>
          {book.cover && <img src={book.cover} alt={book.title} />}
          <p>{book.desc}</p>
        </div>
      ))}
    </div>
  );
};
export default AllBooks;
