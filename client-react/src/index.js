import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import requireAuth from './auth/requireAuth';

import reducers from './reducers';

const cache = new InMemoryCache({
  dataIdFromObject: o=>o.id || null
});
const link = new HttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});
const client = new ApolloClient({
  link,
  cache
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

// registerServiceWorker();
