import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddBookResourceForm from '../components/forms/Book';

const Add = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/books', book);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="add">
      <h1>Add Resource</h1>

      <div className="input-container">
        <label htmlFor="type">Resoucre type</label>
        <select name="typ" id="">
          <option value="">Book</option>
          <option value="">Video</option>
          <option value="">Audio</option>
          <option value="">Article</option>
        </select>
      </div>

      <AddBookResourceForm
        handleClick={handleClick}
        handleChange={handleChange}
        book={book}
      />
    </main>
  );
};
export default Add;
