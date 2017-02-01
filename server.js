import express from 'express';
import path from 'path';
import Api from './src/api/api';
import { PORT } from './config';

const app = express();

app.use('/api', Api());

app.use('/public', express.static(path.join(__dirname, './app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(5555, () => {
  console.log(`server started on port `);
});
