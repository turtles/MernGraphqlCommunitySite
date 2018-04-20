const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  displayName: String,
  joined: {
    type: Date,
    default: new Date()
  },
  activated: { type: Boolean, default: false },
  activation_token: {
    type: String,
    default: function() {
      const bytes = crypto.randomBytes(64);
      return bytes.toString('hex');
    }
  }
});

// Hash password before storing.
UserSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(12, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

UserSchema.methods.onLogin = function onLogin() {
  this.lastLogin = new Date();
}

mongoose.model('user', UserSchema);
