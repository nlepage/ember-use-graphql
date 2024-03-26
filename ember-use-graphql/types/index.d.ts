import type { ApolloQueryResult, WatchQueryOptions } from '@apollo/client/core';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { DocumentNode } from 'graphql';


export function useQuery<TData = any, TVariables extends OperationVariables = OperationVariables>(
  context: object,
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryOptions<TVariables, TData>,
): ApolloQueryResult<TData>;

export type QueryOptions<TVariables extends OperationVariables = OperationVariables, TData = any> =
  Omit<WatchQueryOptions<TVariables, TData>, 'query' | 'variables'> & {
    client?: string
    variables: TVariables | (() => TVariables)
  };

export type OperationVariables = Record<string, any>;
