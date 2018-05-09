const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLFloat
} = graphql;

const UserType = require('./user_type');
const ArticleType = require('./article_type');
const ArticleFeedType = require('./article_feed_type');

const User = mongoose.model('user');
const Article = mongoose.model('article');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, args, req) {
        if (args.id) {
          let _id = mongoose.Types.ObjectId(args.id);
          return new Promise((resolve, reject) => {
            User.findOne({ _id }, (err, user) => {
              if (err) reject(err);
              resolve(user);
            });
          });
        }
        // if id is not specified, get the logged in user
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
          Article.findOne(args,(err, article) => {
            if (err) reject(err);
            resolve(article);
          });
        })
      }
    },
    articleFeed: {
      type: ArticleFeedType,
      args: {
        owner: { type: GraphQLString },
        title: { type: GraphQLString },
        textSearch: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) },
        sortBy: { type: GraphQLString },
        cursor: { type: GraphQLFloat },
        pageLength: { type: GraphQLFloat }
      },
      resolve(parentValue, args, req) {
        const cursor = args.cursor ? args.cursor : 0;
        const pageLength = args.pageLength ? args.pageLength : 10;
        delete args.cursor;
        delete args.pageLength;

        if (args.owner) {
            args.owner = mongoose.Types.ObjectId(args.owner);
        }
        if (args.textSearch && args.textSearch.length<3) {
          delete args.textSearch;
        }
        let sortBy = args.sortBy;
        delete args.sortBy;
        if (args.textSearch) {
          // Search title and body for this string
          args.title = args.body = {
            "$regex": args.textSearch,
            "$options": "i"
          };
          delete args.textSearch;
        }
        if (args.tags) {
          // Remove tags that are too short
          args.tags = args.tags.filter(tag => tag.length > 1);
          if (args.tags.length === 0) {
            delete args.tags;
          }
          else {
            args.tags = {
              "$all": args.tags
            };
          }
        }

        switch (sortBy) {
          case "popular":
            sortBy = "-views";
            break;
          case "oldest":
            sortBy = "created";
            break;
          default: // Newest
            sortBy = "-created";
        }
        return new Promise(function (resolve, reject) {
          (function (pageLength, cursor) {
            Article.find(args).sort(sortBy).find(function (err, articles) {
              if (err) reject(err);
              const numPages = Math.ceil(articles.length / pageLength);
              articles = articles.slice(pageLength * cursor, pageLength * cursor + pageLength);
              let articleFeed = {
                cursor,
                numPages,
                feed: articles
              };
              resolve(articleFeed);
            });
          })(pageLength, cursor);
        });
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
          })
          .populate('owner', 'email displayName')
          .exec((err, article) => {
            if (err) reject(err);
            resolve(article);
          });
        })
      }
    }
  }
});

module.exports = RootQueryType;
