import { registerDestructor } from '@ember/destroyable';
import { getOwner } from '@ember/owner';
import Route from '@ember/routing/route';
import { cached, tracked } from '@glimmer/tracking';

export function useQuery(context, query, options) {
  const queryObject = new Query(context, query, options);

  if (context instanceof Route) {
    context.on('deactivate', queryObject, queryObject.unsubscribe);
  } else {
    registerDestructor(context, () => {
      queryObject.unsubscribe();
    });
  }

  return new QueryResult(queryObject);
}

class Query {
  client;
  query;
  variables;
  observableQuery;
  subscription;
  trackedResult;

  constructor(context, query, { client, variables, ...options }) {
    const owner = getOwner(context);
    if (!owner) {
      throw new TypeError('could not find owner of given context');
    }

    this.client = owner.lookup(`apollo:${client ?? 'default'}`);
    if (!this.client) {
      throw new TypeError(
        `could not find client for name "apollo:${client ?? 'default'}"`,
      );
    }

    this.query = { ...options, query };
    this.variables = variables;
    this.trackedResult = new TrackedResult();

    this.subscribe();
  }

  @cached
  get result() {
    this.observableQuery.refetch(
      typeof this.variables === 'function' ? this.variables() : this.variables,
    );

    return this.trackedResult;
  }

  subscribe() {
    this.observableQuery = this.client.watchQuery({
      ...this.query,
      variables: {
        ...this.query.variables,
        ...(typeof this.variables === 'function'
          ? this.variables()
          : this.variables),
      },
    });

    this.trackedResult.result = this.observableQuery.getCurrentResult();

    this.subscription = this.observableQuery.subscribe((result) => {
      this.trackedResult.result = result;
    });
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}

class TrackedResult {
  @tracked result;

  get data() {
    return this.result.data;
  }

  get loading() {
    return this.result.loading;
  }
}

class QueryResult {
  #query;

  constructor(query) {
    this.#query = query;
  }

  get data() {
    return this.#query.result.data;
  }

  get errors() {
    return this.#query.result.errors;
  }

  get error() {
    return this.#query.result.error;
  }

  get loading() {
    return this.#query.result.loading;
  }

  get networkStatus() {
    return this.#query.result.networkStatus;
  }

  get partial() {
    return this.#query.result.partial;
  }
}
