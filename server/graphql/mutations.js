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
const ArticlesServer = require('../middleware/articles');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    register: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, {email, password}, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
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
        // args will equal....
        // { owner: '123',
        //   title: 'today in leahland',
        //   body: 'everything changed',
        //   tags: [ 'no', 'yes' ] }

        // save the stuff to the database
        // ArticlesServer

        console.log('hello submit article');
        console.log(parentValue);
        console.log(args);
        console.log(info);
      }
    }
  }
});

module.exports = mutation;
