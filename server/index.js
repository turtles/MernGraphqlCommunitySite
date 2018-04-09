const express = require('express');
const models = require('./db/models');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);
const graphqlSchema = require('./graphql/schema');

const {mongoose, MONGO_URI} = require('./db/mongoose');
const app = express();

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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
