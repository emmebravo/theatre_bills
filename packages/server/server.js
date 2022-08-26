import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';

const app = express();
const PORT = process.env.PORT || 5000;

//connect DB
connectDB();

//connect passport

//json + form POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`local host @ ${PORT}`);
});
