const mongoose = require('mongoose');

const Article = mongoose.model('article');
const Comment = mongoose.model('comment');

const createArticle = (args) => {
    if (args.title.trim() === '' || args.body.trim() === '') {
      throw new Error('Articles must have a title and a body.');
    }
    const article = new Article({
      owner: args.owner,
      title: args.title,
      body: args.body,
      tags: args.tags
    });
    
    return article.save();
};

const createComment = (args) => {
  if (args.body.trim() === '') {
    throw new Error(`Can't leave an empty comment`);
  }
  const comment = new Comment({
     body: args.body
  });

  return comment.save();
}

module.exports = { createArticle, createComment } ;
