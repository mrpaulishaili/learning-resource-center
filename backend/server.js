import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import booksRoute from './routes/books.js';
import { BASE_URL } from './config.js';

dotenv.config();

const app = express();

// MIDDLEWARES

app.use(express.json());
app.use(cors());

app.use('/api/books', booksRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Learning Resource Center API Server');
});

app.get('/api', (req, res) => {
  res.send('Learning Resource Center API Endpoint');
});

app.listen(process.env.PORT, () => {
  console.log(`${BASE_URL()}`);
});
