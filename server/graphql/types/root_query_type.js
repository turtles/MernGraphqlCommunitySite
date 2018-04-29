const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
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
      type: ArticleType,
      args: {
        owner: { type: GraphQLString },
        title: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        if (args.owner) {
            args.owner = mongoose.Types.ObjectId(args.owner);
        }
        return new Promise((resolve, reject) => {
          Article.findOne(args,(err, articles) => {
            if (err) reject(err);
            resolve(articles);
          })
        })
      }
    },
    articles: {
      type: new GraphQLList(ArticleType),
      args: {
        owner: { type: GraphQLString },
        title: { type: GraphQLString },
        textSearch: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        if (args.owner) {
            args.owner = mongoose.Types.ObjectId(args.owner);
        }
        if (args.textSearch) {
          // Search title and body for this string
          args.title = args.body = {
            "$regex": args.textSearch,
            "$options": "i"
          };
          delete args.textSearch;
        }
        return new Promise((resolve, reject) => {
          Article.find(args, (err, articles) => {
            if (err) reject(err);
            resolve(articles);
          })
        })
      }
    },
    article: {
      type: ArticleType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        if (args.id) {
            args._id = mongoose.Types.ObjectId(args.id);
            delete args.id;
        }
        return new Promise((resolve, reject) => {
          Article.findOne(args, (err, article) => {
            if (err) reject(err);
            if (article) {
              article.views++;
              article.save();
            }
            resolve(article);
          })
        })
      }
    }
  }
});

module.exports = RootQueryType;
