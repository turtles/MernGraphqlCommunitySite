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
const CommentType = require('./types/comment_type');
const AuthService = require('../middleware/passport');
const ArticlesService = require('../middleware/articles');

const User = mongoose.model('user');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    register: {
      type: UserType,
      args: {
        displayName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, {displayName, email, password}, info) {
        return AuthService.signup({ displayName, email, password, info });
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
        if (!user) throw new Error('Must be logged in to change username.');

        return AuthService.changeDisplayName(
          user, displayName
        );
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
        if (!user) throw new Error('Must be logged in to change password.');
        return AuthService.changePassword(
          user, currentPassword, newPassword
        );
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
        const { user } = info;
        if (!user) {
          throw new Error('You must be logged in to submit an article.');
        }
        if (!user.activated) {
          throw new Error('Your email must be activated in order to submit an article.');
        }
        args.owner = info.user;
        return ArticlesService.createArticle(args);
      }
    },
    modifyArticle: {
      type: ArticleType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parentValue, args, info) {
        const { user } = info;
        if (!user) {
          throw new Error('You must be logged in to submit an article.');
        }
        // No need to check if the user is activated.
        // The article would not exist if they were not activated.
        args.id = mongoose.Types.ObjectId(args.id);
        return ArticlesService.modifyArticle(args, user.id);
      }
    },
    submitComment: {
      type: CommentType,
      args: {
        owner: { type: GraphQLID },
        article: { type: GraphQLID },
        body: { type: GraphQLString }
      },
      resolve(parentValue, args, info) {
        const { user } = info;
        if (!user) {
          throw new Error('You must be logged in to submit a comment.');
        }
        if (!user.activated) {
          throw new Error('Your email must be activated in order to submit a comment.');
        }
        return ArticlesService.createComment(args);
      }
    },
    activateAccount: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        token: { type: GraphQLID }
      },
      resolve(parentValue, args, info) {
        return AuthService.activate(args.id, args.token);
      }
    },
    resendActivationEmail: {
      type: UserType,
      resolve(parentValue, args, info) {
        const { user } = info;
        if (!user) {
          throw new Error('You must be logged in to resend an activation email.');
        }
        if (user.activated) {
          throw new Error('Account already activated.');
        }
        return AuthService.resendActivationEmail(user);
      }
    }
  }
});

module.exports = mutation;
