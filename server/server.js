const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const {mongoose} = require('./db/mongoose')
const {User} = require('./models/user')
const {authenticate} = require('./middleware/authenticate');

var app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

const port = 3001

app.use(bodyParser.json())

app.get('/', (req,res) => {
     res.sendFile(__dirname+'/static/index.html')
})
app.get('/hello', (req,res) => {
     res.send({message: "hello ' w '"});
})

// Register user route
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token)=> {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
})

// Private route
app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

module.exports = {app}
