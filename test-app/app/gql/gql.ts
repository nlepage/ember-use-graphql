/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment CharacterEpisodes on Character {\n    episode {\n      episode\n      id\n      name\n    }\n  }\n": types.CharacterEpisodesFragmentDoc,
    "\n  fragment CharacterPreview on Character {\n    id\n    name\n    image\n  }\n": types.CharacterPreviewFragmentDoc,
    "\n  fragment Character on Character {\n    id\n    name\n    image\n    gender\n    type\n    status\n    species\n  }\n": types.CharacterFragmentDoc,
    "\n      query Characters($filter: FilterCharacter) {\n        characters(filter: $filter) {\n          results {\n            id\n            ...CharacterPreview\n          }\n        }\n      }\n    ": types.CharactersDocument,
    "\n        query Character($characterId: ID!) {\n          character(id: $characterId) {\n            id\n            name\n            ...Character\n            ...CharacterEpisodes\n          }\n        }\n      ": types.CharacterDocument,
    "\n        query RickAndMorty($rickId: ID!, $mortyId: ID!) {\n          rick: character(id: $rickId) {\n            id\n            ...CharacterPreview\n          }\n          morty: character(id: $mortyId) {\n            id\n            ...CharacterPreview\n          }\n        }\n      ": types.RickAndMortyDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterEpisodes on Character {\n    episode {\n      episode\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterEpisodes on Character {\n    episode {\n      episode\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterPreview on Character {\n    id\n    name\n    image\n  }\n"): (typeof documents)["\n  fragment CharacterPreview on Character {\n    id\n    name\n    image\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Character on Character {\n    id\n    name\n    image\n    gender\n    type\n    status\n    species\n  }\n"): (typeof documents)["\n  fragment Character on Character {\n    id\n    name\n    image\n    gender\n    type\n    status\n    species\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query Characters($filter: FilterCharacter) {\n        characters(filter: $filter) {\n          results {\n            id\n            ...CharacterPreview\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Characters($filter: FilterCharacter) {\n        characters(filter: $filter) {\n          results {\n            id\n            ...CharacterPreview\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query Character($characterId: ID!) {\n          character(id: $characterId) {\n            id\n            name\n            ...Character\n            ...CharacterEpisodes\n          }\n        }\n      "): (typeof documents)["\n        query Character($characterId: ID!) {\n          character(id: $characterId) {\n            id\n            name\n            ...Character\n            ...CharacterEpisodes\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query RickAndMorty($rickId: ID!, $mortyId: ID!) {\n          rick: character(id: $rickId) {\n            id\n            ...CharacterPreview\n          }\n          morty: character(id: $mortyId) {\n            id\n            ...CharacterPreview\n          }\n        }\n      "): (typeof documents)["\n        query RickAndMorty($rickId: ID!, $mortyId: ID!) {\n          rick: character(id: $rickId) {\n            id\n            ...CharacterPreview\n          }\n          morty: character(id: $mortyId) {\n            id\n            ...CharacterPreview\n          }\n        }\n      "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;