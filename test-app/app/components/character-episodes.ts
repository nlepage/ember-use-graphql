import Component from '@glimmer/component';

import { graphql } from '../gql';
import { type FragmentType, useFragment } from '../gql/fragment-masking';

const CharacterEpisodesFragment = graphql(`
  fragment CharacterEpisodes on Character {
    episode {
      episode
      id
      name
    }
  }
`);

interface CharacterEpisodesSignature {
  Args: {
    character: FragmentType<typeof CharacterEpisodesFragment>;
  };
}

export default class Character extends Component<CharacterEpisodesSignature> {
  get episodes() {
    return useFragment(CharacterEpisodesFragment, this.args.character).episode;
  }
}
