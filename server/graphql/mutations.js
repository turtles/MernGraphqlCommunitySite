const { mongoose } = require('../db/mongoose');
const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} = graphql;

const UserType = require('./types/user_type');
const ArticleType = require('./types/article_type');
const AuthService = require('../middleware/passport');
const ArticlesService = require('../middleware/articles');

const User = mongoose.model('user');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    register: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, {email, password}, info) {
        return AuthService.signup({ email, password, info });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, info) {
        const { user } = info;
        info.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, info) {
        return AuthService.login({ email, password, info });
      }
    },
    updateDisplayName: {
      type: UserType,
      args: {
        displayName: { type: GraphQLString }
      },
      resolve(parentValue, { displayName }, info) {
        const { user } = info;
        if (!user) {
          return null;
        }
        user.displayName = displayName;
        user.save();
      }
    },
    changePassword: {
      type: UserType,
      args: {
        currentPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
      },
      resolve(parentValue, { currentPassword, newPassword }, info) {
        const { user } = info;
        if (!user) {
          return null;
        }
        console.log(currentPassword,newPassword);

      }
    },
    submitArticle: {
      type: ArticleType,
      args: {
        owner: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parentValue, args, info) {
        ArticlesService.createArticle(args);
      }
    }
  }
});

module.exports = mutation;
