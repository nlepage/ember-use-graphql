import Component from '@glimmer/component';

import { graphql } from '../gql';
import { type FragmentType, useFragment } from '../gql/fragment-masking';

const CharacterFragment = graphql(`
  fragment Character on Character {
    id
    name
    image
    gender
    type
    status
    species
  }
`);

interface CharacterSignature {
  Args: {
    character: FragmentType<typeof CharacterFragment>;
  };
}

export default class Character extends Component<CharacterSignature> {
  get character() {
    return useFragment(CharacterFragment, this.args.character);
  }
}
