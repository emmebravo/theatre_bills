import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import passportConfig from './config/passport.js';
import path from 'path';
import main from './routes/api/main.js';
import users from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

//connect DB
connectDB();
passportConfig(passport);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:5173', // allows server to accept requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // allow cookie session from browser to pass through to server
  })
);
//session
app.use(
  session({
    secret: process.env.SESH_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_DEV === 'PRODUCTION',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 wk
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/users', users);
app.use('/api', main);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname + '../client/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`localhost @ ${PORT}`);
});
