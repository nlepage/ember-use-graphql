import type { ApolloQueryResult, OperationVariables, WatchQueryOptions } from '@apollo/client/core';

export function useQuery<T = any, TVariables extends OperationVariables = OperationVariables>(
  context: object,
  query: WatchQueryOptions<TVariables, T>,
  variables: TVariables | (() => TVariables),
): ApolloQueryResult<T>
