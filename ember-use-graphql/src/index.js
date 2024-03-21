import { registerDestructor } from '@ember/destroyable';
import { getOwner } from '@ember/owner';
import Route from '@ember/routing/route';
import { cached, tracked } from '@glimmer/tracking';

export function useQuery(context, query, variables) {
  return new QueryResult(
    context instanceof Route
      ? new RouteQuery(context, query, variables)
      : new DestroyableQuery(context, query, variables),
  );
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
  }

  @cached
  get result() {
    if (this.observableQuery) {
      this.observableQuery.refetch(this.variables());
    } else {
      this.subscribe();
    }

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
        ...this.variables(),
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

class DestroyableQuery extends Query {
  constructor(...args) {
    super(...args);

    registerDestructor(this.context, () => {
      this.unsubscribe();
    });
  }
}

class RouteQuery extends Query {
  constructor(...args) {
    super(...args);

    this.context.on('deactivate', this, this.unsubscribe);
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
