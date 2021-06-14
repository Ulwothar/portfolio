import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import EmailRoutes from './src/routes/email/emailRoutes';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use(express.json());

app.listen(5005);

app.use('/email', EmailRoutes);

console.log('Listening on port 5005');
