import Route from '@ember/routing/route';
import { gql } from 'graphql-tag';
import { useQuery } from 'ember-use-graphql';

export default class CharacterRoute extends Route {
  model(params: Record<string, string>) {
    return useQuery(
      this,
      {
        query: gql`
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
        `,
      },
      () => ({
        characterId: params['character_id'],
      }),
    );
  }
}
