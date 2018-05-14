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

const modifyArticle = (args, userId) => {
  return new Promise((resolve,reject) => {
    Article.findOne({_id: args.id}, (err, article)=> {
      if (err) reject(err);
      if (!article) return reject('Article not found.');
      if (!article.owner.equals(userId)) {
        return reject(`You don't have permission to edit this article.`);
      }
      article.title = args.title;
      article.body = args.body;
      article.tags = args.tags;
      resolve(article.save());
    });
  });
}

const createComment = (args) => {
  if (args.body.trim() === '') {
    throw new Error(`Can't leave an empty comment`);
  }
  const comment = new Comment({
    owner: args.owner,
    article: args.article,
    body: args.body
  });

  return comment.save();
}

module.exports = { createArticle, createComment, modifyArticle } ;
