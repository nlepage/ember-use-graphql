import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { gql } from 'graphql-tag';
import { useQuery } from 'ember-use-graphql';

export default class Characters extends Component {
  @tracked query = '';

  characters = useQuery(
    this,
    {
      query: gql`
        query Characters($filter: FilterCharacter) {
          characters(filter: $filter) {
            results {
              id
              name
            }
          }
        }
      `,
    },
    () => ({
      filter: {
        name: this.query,
      },
    }),
  );
}
