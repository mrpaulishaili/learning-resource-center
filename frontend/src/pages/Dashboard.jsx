import { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Dashboard = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/books/' + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Books</h1>

      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} />}
            <h3>{book.title}</h3>
            <p>{book.desc}</p>
            <button className="deleteBtn" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="updateBtn">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Dashboard;
