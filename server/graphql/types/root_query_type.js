const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList
} = graphql;

const UserType = require('./user_type');
const ArticleType = require('./article_type');

const Article = mongoose.model('article');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    article: {
      type: new GraphQLList(ArticleType),
      resolve(parentValue, args, req) {
        return new Promise((resolve, reject) => {
          Article.find((err, articles) => {
            if (err) reject(err);
            resolve(articles);
          })
        })
      }
    }
  }
});

module.exports = RootQueryType;
