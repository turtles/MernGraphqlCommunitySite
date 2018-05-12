const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const UserType = require('./user_type');

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: () => ({
    id: { type: GraphQLID },
    owner: { type: UserType },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    views: { type: GraphQLInt },
    created: { type: GraphQLString },
    lastModified: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = ArticleType;
