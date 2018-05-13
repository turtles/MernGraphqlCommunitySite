const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = graphql;

const ArticleType = require('./article_type');

const ArticleFeedType = new GraphQLObjectType({
  name: 'ArticleFeedType',
  fields: {
    id: { type: GraphQLID },
    cursor: { type: GraphQLInt },
    numPages: { type: GraphQLInt },
    total: { type: GraphQLInt },
    feed: { type: new GraphQLList(ArticleType) }
  }
});

module.exports = ArticleFeedType;
