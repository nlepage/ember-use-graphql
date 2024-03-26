import Component from '@glimmer/component';

import { graphql } from '../gql';
import { type FragmentType, useFragment } from '../gql/fragment-masking';

const CharacterPreviewFragment = graphql(`
  fragment CharacterPreview on Character {
    id
    name
    image
  }
`);

interface CharacterPreviewSignature {
  Args: {
    character: FragmentType<typeof CharacterPreviewFragment>;
  };
}

export default class Character extends Component<CharacterPreviewSignature> {
  get character() {
    return useFragment(CharacterPreviewFragment, this.args.character);
  }
}
