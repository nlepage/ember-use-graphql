import Route from '@ember/routing/route';
import { useQuery } from 'ember-use-graphql';

import { graphql } from '../gql';

const rickId = '1';
const mortyId = '2';

export default class IndexRoute extends Route {
  model() {
    return useQuery(
      this,
      graphql(`
        query RickAndMorty($rickId: ID!, $mortyId: ID!) {
          rick: character(id: $rickId) {
            id
            ...CharacterPreview
          }
          morty: character(id: $mortyId) {
            id
            ...CharacterPreview
          }
        }
      `),
      {
        variables: {
          rickId,
          mortyId,
        },
      },
    );
  }
}
