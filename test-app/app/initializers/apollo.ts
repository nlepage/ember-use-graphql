import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import type Application from '@ember/application';

export function initialize(application: Application) {
  const defaultClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: './graphql',
  });

  application.register('apollo:default', defaultClient, { instantiate: false });
}

export default {
  name: 'apollo',
  initialize,
};
