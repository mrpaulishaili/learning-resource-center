import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import booksRoute from './routes/books.js';

dotenv.config();

const app = express();

// MIDDLEWARES

app.use(express.json());
app.use(cors());

app.use('/books', booksRoute);

app.get('/', (req, res) => {
  res.send('Hello this is the backend');
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
