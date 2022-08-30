import passportlocal from 'passport-local';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const LocalStrategy = passportlocal.Strategy;

export default function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // match user
      User.findOne({ email: email.toLowerCase() })
        .then((user) => {
          if (!user) {
            // return done if user doesn't exist
            return done(null, false, {
              message: 'That email is not registered',
            });
          }

          // match password
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) throw error;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password incorrect' });
            }
          });
        })
        .catch((error) => console.log(error));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById({ _id: id }, (err, user) => {
      done(err, user);
    });
  });
}
