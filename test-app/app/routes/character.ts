import Route from '@ember/routing/route';
import { useQuery } from 'ember-use-graphql';
import { graphql } from '../gql';

export default class CharacterRoute extends Route {
  model(params: { character_id: string }) {
    return useQuery(
      this,
      {
        query: graphql(/* GraphQL */ `
          query Character($characterId: ID!) {
            character(id: $characterId) {
              id
              name
              image
              gender
              type
              status
              species
            }
          }
        `),
      },
      () => ({
        characterId: params.character_id,
      }),
    );
  }
}
