import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import main from './routes/api/main.js';

const app = express();
const PORT = process.env.PORT || 5000;

//connect DB
connectDB();

//connect passport

//json + form POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//session
app.use(
  session({
    secret: process.env.SESH_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

//routes
app.get('/', (request, response) => {
  response.send('API working');
});
app.use('/api/main', main);

app.listen(PORT, () => {
  console.log(`local host @ ${PORT}`);
});
