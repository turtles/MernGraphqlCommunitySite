var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/MernMeanApp'
);

mongoose.connection
  .on('error', err=>console.log('Error when connecting to MongoDB:', err));

module.exports = {mongoose};
