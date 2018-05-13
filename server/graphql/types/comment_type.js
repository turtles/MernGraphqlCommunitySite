const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const UserType = require('./user_type');
const ArticleType = require('./article_type');

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: { type: GraphQLID },
    article: {type: ArticleType},
    owner: { type: UserType },
    body: { type: GraphQLString },
    created: { type: GraphQLString },
    lastModified: { type: GraphQLString }
  })
});

module.exports = CommentType;
