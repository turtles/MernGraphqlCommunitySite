const express = require('express')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')

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

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

module.exports = {app}
