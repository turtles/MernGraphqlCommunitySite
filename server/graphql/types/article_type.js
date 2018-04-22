const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: {
    id: { type: GraphQLID },
    owner: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    views: { type: GraphQLInt },
    tags: { type: new GraphQLList(GraphQLString) }
  }
});

module.exports = ArticleType;
