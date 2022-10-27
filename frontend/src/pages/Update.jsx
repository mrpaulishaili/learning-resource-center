import { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: null,
  });

  const navigate = useNavigate();

  const location = useLocation();

  const bookId = location.pathname.split('/')[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/books/' + bookId, book);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);

  return (
    <main className="Update">
      <h1>Update Book Page</h1>

      <form className="form" onSubmit={handleClick}>
        <h2 className="form__title">Update Book Form</h2>

        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
          required
          value={book.title}
        />
        <input
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="desc"
          required
          value={book.desc}
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
          required
          value={book.price}
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
          required
          value={book.cover}
        />
        <button type="submit">Update Book</button>
      </form>
    </main>
  );
};
export default Update;
