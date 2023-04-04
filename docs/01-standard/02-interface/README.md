---
id: interface
title: Interface
slug: /interface
---

`draft`, `subject to change`

This document describes an interface for communicating with a web browser wallet.

The main focus is on standardizing a method of serializing named parameters

The interface for communicating with a wallet via a secure channel, using an injected JavaScript global object.

The following methods are provided via `window.btc` or `globalThis.btc`:

- `request(method: string, params?: {}): Promise<any>`
- `listen(event: string, callback: (r) => void, params?: {})`

:::info
In a web environment, you can use [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window). The environment-agnostic global variable is [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis).
:::

## `request` — Request interface

### Examples

```ts
import '@btckit/types';

const address = await window.btc.request('getAddresses', {
  account: 0,
  change: false,
  index: 0,
});
```

## `listen` — Event listener interface

### Examples

```ts
import '@btckit/types';

window.btc.listen('networkChanged', network => {
  console.log('Network switched in wallet', network);
});
```

:::note
Wallets can decide on how handle unimplemented methods (or make it configurable to the user).
E.g. an unimplemented method could throw an error, or return an error object, or be "dropped" and stuck indefinitely.
:::
