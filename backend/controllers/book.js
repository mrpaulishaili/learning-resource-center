import mysql from 'mysql2';

// DB CONNECTION
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mrpaulishaili@2022.',
  database: 'books_store',
});

// ADD BOOK

const addBook = async (req, res) => {
  const query =
    'INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)';
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);

    return res.json('New book has been added');
  });
};

// GET BOOK

const getBook = async () => {};

// GET ALL BOOK

const getAllBooks = async (req, res) => {
  const query = 'SELECT * FROM books';

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
};
// UPDATE BOOK

const updateBook = async (req, res) => {
  const bookId = req.params.id,
    query =
      'UPDATE books SET `title` = ?, `desc` = ? , `price` = ?,  `cover` = ? WHERE id = ?';

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(query, [...values, bookId], (err, data) => {
    if (err) return res.json(err);

    return res.json('Book has been updated successfully');
  });
};

// DELETE BOOK

const deleteBook = async (req, res) => {
  const bookId = req.params.id,
    query = 'DELETE FROM books WHERE id = ?';

  db.query(query, [bookId], (err, data) => {
    if (err) return res.json(err);

    return res.json('Book has been deleted successfully');
  });
};

export { addBook, getAllBooks, getBook, updateBook, deleteBook };
