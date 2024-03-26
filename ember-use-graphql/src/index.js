import { registerDestructor } from '@ember/destroyable';
import { getOwner } from '@ember/owner';
import Route from '@ember/routing/route';
import { cached, tracked } from '@glimmer/tracking';

export function useQuery(context, query, variables) {
  const queryObject = new Query(context, query, variables);

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
  context;
  query;
  variables;
  observableQuery;
  subscription;
  trackedResult;

  constructor(context, query, variables) {
    this.context = context;
    this.query = query;
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
    const owner = getOwner(this.context);
    if (!owner) throw new TypeError('FIXME');

    const client = owner.lookup('apollo:default');

    this.observableQuery = client.watchQuery({
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

  get loading() {
    return this.#query.result.loading;
  }

  // FIXME add other fields
}
