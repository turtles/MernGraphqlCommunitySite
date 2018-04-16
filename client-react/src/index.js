import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from 'react-apollo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
