import 'dotenv/config';
import User from '../models/User.js';
import passport from 'passport';
import bcrypt from 'bcrypt';

const login = (request, response, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) throw error;
    if (!user) response.sendStatus(401);
    else {
      request.logIn(user, (error) => {
        if (error) throw error;
        response.sendStatus(200);
      });
    }
  })(request, response, next);
};

const logout = (request, response) => {
  request.logout();
  request.session.destroy((error) => {
    if (error) response.status(500).send({ error });
  });
};

const register = (request, response) => {
  const { name, email, password, password2 } = request.body;
  const errors = [];

  // check required fields
  if (!name || !email || !password || !password2)
    errors.push({ msg: 'Please fill in all fields' });

  // check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (errors.length > 0) {
    response.render();
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        //if user exists
        errors.push({ message: 'email is already registered' });
        response.send({ errors });
      } else {
        const user = new User({
          name,
          email,
          password,
        });
        // Hash password
        bcrypt.genSalt(10, (error, salt) =>
          bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) throw error;

            // set password to hash
            user.password = hash;

            //save user
            user
              .save()
              .then((user) => {
                response.status(200).send('success');
              })
              .catch((error) => response.status(500).send(error));
          })
        );
      }
    });
  }
};

export { login, logout, register };
