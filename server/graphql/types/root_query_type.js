const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const UserType = require('./user_type');
const ArticleType = require('./article_type');

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
      resolve(parentValue, args, req) {
        return null;
      }
    }
  }
});

module.exports = RootQueryType;
