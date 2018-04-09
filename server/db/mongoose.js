var mongoose = require('mongoose');

var MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/MernMeanApp';

mongoose.Promise = global.Promise;
mongoose.connect(
  MONGO_URI
);

mongoose.connection
  .on('error', err=>console.log('Error when connecting to MongoDB:', err));

module.exports = {mongoose, MONGO_URI};
