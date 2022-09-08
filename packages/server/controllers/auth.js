import 'dotenv/config';
import User from '../models/User.js';
import passport from 'passport';
import bcrypt from 'bcrypt';

const login = (request, response, next) => {
  passport.authenticate('local', {
    successRedirect: 'api/gets/feed',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(request, response, next);
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
        errors.push({ msg: 'Email is already registered' });
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
                // request.flash('success_msg', 'You are now registered!');
                response.redirect('/users/login');
              })
              .catch((error) => console.log(error));
          })
        );
      }
    });
  }
};

export { login, register };
