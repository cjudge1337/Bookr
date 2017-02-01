import express from 'express';
import path from 'path';
// import Api from './src/api/api';
import { PORT } from './config';


const app = express();

// app.use('/api', Api());

app.use('/app', express.static(path.join(__dirname, './app')));

app.get('*', (req, res) => {
  console.log('hello');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
