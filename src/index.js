import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Context from './Context';
import App from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server-gabi-78oz59b5v.vercel.app/graphql'
})
ReactDOM.render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
   document.getElementById('app'));
