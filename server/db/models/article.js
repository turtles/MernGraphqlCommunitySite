const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: String,
  body: String,
  tags: [{
    type: String
  }],
  created: {
    type: Date,
    default: new Date()
  },
  lastModified: Date,
  views: {
    type: Number,
    default: 0
  },
  initialized: {
    type: Boolean,
    default: false
  }
});

// Update last modified date on save
ArticleSchema.pre('save', function save(next) {
  if (!this.initialized) {
    this.initialized = true;
  } else if (this.isModified('title') || this.isModified('body')) {
      this.lastModified = new Date();
  }
  next();
});

mongoose.model('article', ArticleSchema);
