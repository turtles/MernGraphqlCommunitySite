const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const {mongoose} = require('./db/mongoose');

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    keys: ['jingle :D']
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
