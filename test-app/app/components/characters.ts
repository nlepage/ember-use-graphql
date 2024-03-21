import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { useQuery } from 'ember-use-graphql';

import { graphql } from '../gql';

export default class Characters extends Component {
  @tracked query = '';

  #characters = useQuery(
    this,
    {
      query: graphql(/* GraphQL */ `
        query Characters($filter: FilterCharacter) {
          characters(filter: $filter) {
            results {
              id
              name
            }
          }
        }
      `),
    },
    () => ({
      filter: {
        name: this.query,
      },
    }),
  );

  get characters() {
    return this.#characters.data.characters?.results;
  }

  get loading() {
    return this.#characters.loading;
  }
}
