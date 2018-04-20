const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql;

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    views: { type: GraphQLInt }
  }
});

module.exports = ArticleType;
