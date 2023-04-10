---
id: methods-events
title: Methods & Events
---

`draft`, `subject to change`

This standard details the guidelines on using methods and events.

## Methods

Methods are JSON RPC 2.0 compatible methods.
There are some alterations to make the methods easier to works with.

### JSON RPC 2.0 Recap

This is a short recap of the sections of the JSON RPC 2.0 specification relevant for this standard.

`coming soon`

#### Notes & Alterations

- Case Sensitivity: Methods should be case insensitive. (Following webbtc lowercase convention)

#### TypeScript and JSON

This standard may use TypeScript types to describe the methods and events.
Sometimes types like `any` are used to describe the data types.
This is because JSON does not have a type system.
However, only correctly JSON-serializable types are implied when using `any` (or any other type) in the specification for methods/events.

E.g., `bigint` is NOT serializable to JSON by default, so it is not allowed.

If a method/event requires a `bigint` as a parameter, for example, it should be specified as a string (or any other JSON-serializable).
The standard will accept any value which is JSON-serializable and can be used by the types constructor.

E.g. for `bigint` we refer to the [BigInt constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) which also accepts strings in the format `0x123` to construct from a hex-value.

### General Fields and Types

#### `params.network`

Any params object can have an optional `network` field.
It is up to the wallet provider to decide if they want to respect the `network` field and which networks they support.
For safety reasons, the a wallet may ignore the `network` field completely or let the user choose in their UI.

```ts
network?: string | object;
```

`examples`

```ts
network: 'mainnet';
network: 'testnet';

// this network object has been adopted by many bitcoin javascript libraries
network: {
  bech32: 'tb',
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
}
```

#### `params.meta`

Any params object can have an optional `meta` field.

```ts
meta?: {
  [key: string]: any;
};
```

There are no rules on what can be in the `meta` object. Web-apps can use it to send any data they want to a wallet.
The `meta` field is meant for optional data that is not part of the method's core functionality.
But it can also be used for unstable params that are not yet part of the standard.

### `exactMethods`

`coming soon` `todo`

## Events

`coming soon` `todo`

---

## Layers

Any other layers on top of Bitcoin are offered behind optional interfaces, which follow the same standard as previously described.

The only difference is that the method and event names are prefixed with the layer/chain name.

Examples

- for Lightning an example method could be `ln_getInvoice`
- for Stacks an example method could be `stx_getAddresses`

The exact definition of the methods on these layers are not officially part of the standard. They may be standardized by the respective ecosystems and communities.

---

### References

- [bitcoin js networks.js](https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/src/networks.js)
