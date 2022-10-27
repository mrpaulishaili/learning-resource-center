import express from 'express';
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from '../controllers/book.js';

const router = express.Router();

router
  .get('/', getAllBooks)
  .get('/:id', getBook)
  .post('/', addBook)
  .put('/:id', updateBook)
  .delete('/:id', deleteBook);

export default router;
