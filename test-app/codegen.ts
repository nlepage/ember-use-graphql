import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['app/components/**/*.ts', 'app/routes/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './app/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
