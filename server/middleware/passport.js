const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const sendActivationEmail = require('../email/sendActivationEmail');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, 'Invalid Credentials'); }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, 'Invalid credentials.');
    });
  });
}));

function changePassword(user, currentPassword, newPassword) {
  return new Promise((resolve, reject) => {
    user.comparePassword(currentPassword, (err,isMatch)=>{
      if (err) {
        console.log(err);
        reject('Unspecified error');
      }

      if (!isMatch) {
        reject('Current password is invalid.');
      }
      else {
        user.password = newPassword;
        user.save();
        resolve(user);
      }
    });
  });
}

function signup({ email, password, info }) {
  const user = new User({ email, password });
  if (!email || !password) { throw new Error('You must provide an email and password.'); }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) { throw new Error('Email in use'); }
      return user.save();
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        info.logIn(user, (err) => {
          if (err) { reject(err); }
          sendActivationEmail(user.email, user._id, user.activation_token);
          resolve(user);
        });
      });
    });
}

function login({ email, password, info }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { reject('Invalid credentials.') }

      info.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

module.exports = { signup, login, changePassword };
