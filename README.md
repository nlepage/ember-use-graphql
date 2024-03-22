# ember-use-graphql

Modern Ember GraphQL integration.

## Compatibility

- Ember.js v4.12 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-use-graphql
```

## Usage

[Longer description of how to use the addon in apps.]

## Common problems

### ts(2742): The inferred type of 'x' cannot be named without a reference to '@apollo/client/core'

This error might occur when using pnpm, the `node_modules` layout generated by pnpm messes Typescript's type inference.

To workaround this error, add the following line in the `types/global.d.ts` file of your Ember app:

```ts
import '@apollo/client/core';
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
