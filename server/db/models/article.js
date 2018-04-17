const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  owner: Schema.Types.ObjectId,
  title: String,
  body: String
});

mongoose.model('article', ArticleSchema);
