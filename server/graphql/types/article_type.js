const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: {
    id: { type: GraphQLID },
    body: { type: GraphQLString }
  }
});

module.exports = ArticleType;
