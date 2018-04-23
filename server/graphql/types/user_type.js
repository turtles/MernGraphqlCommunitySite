const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    displayName: { type: GraphQLString },
    activated: { type: GraphQLBoolean }
  }
});

module.exports = UserType;
