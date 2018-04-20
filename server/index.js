const express = require('express');
const models = require('./db/models');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);
const graphqlSchema = require('./graphql/schema');
const path = require("path");

const {mongoose, MONGO_URI} = require('./db/mongoose');
const app = express();

const User = mongoose.model('user');

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uieghjr9suegrha',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

app.use('/graphql', expressGraphQL({
  schema: graphqlSchema,
  graphiql: true
}));

app.use("/activate/:userId/:token", function(req,res) {
  // Todo: check if the user has already been activated.
  User.findOneAndUpdate(
      { // query
        _id: req.params.userId,
        activation_token: req.params.token
      },
      { // update activated to true, clear out token
        activated: true,
        activation_token: ""
      },
      { new: true }
    )
    .then(user=> {
      resolve(user);
    });
  console.log(req.params);
  res.send(req.params);
});

app.use('/', function(req,res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
