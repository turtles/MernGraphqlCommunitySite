const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  owner: Schema.Types.ObjectId,
  title: String,
  body: String,
  tags: [{
    type: String
  }],
  created: {
    type: Date,
    default: new Date()
  },
  lastModified: {
    type: Date,
    default: new Date()
  },
  views: {
    type: Number,
    default: 0
  }
});

// Update last modified date on save
ArticleSchema.pre('save', function save(next) {
  const article = this;
  article.lastModified = new Date();
  next();
});

mongoose.model('article', ArticleSchema);
