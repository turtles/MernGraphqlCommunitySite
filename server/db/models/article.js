const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  owner: Schema.Types.ObjectId,
  title: String,
  body: String,
  tags: [{
    type: String
  }],
  created: Date,
  views: Number
});

mongoose.model('article', ArticleSchema);
