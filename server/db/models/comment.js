const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'article'
  },
  body: String,
  created: {
    type: Date,
    default: new Date()
  },
  lastModified: {
    type: Date,
    default: new Date()
  }
});

// Update last modified date on save
CommentSchema.pre('save', function save(next) {
  if (this.isModified('body')) {
      this.lastModified = new Date();
  }
  next();
});

mongoose.model('comment', CommentSchema);
