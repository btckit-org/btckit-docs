---
id: spec
title: Specification
slug: /spec
---

## Introduction

btckit is a simple, easy to use, and secure Bitcoin wallet standard — inspired by, and built on top of, proven standards in the Bitcoin ecosystem.

:::note
⚠ This is a work in progress, and is subject to change.
:::

btckit lays out how to communicate with Bitcoin wallets, and how to handle the responses.

- **JSON RPC 2.0** — Communication via safe standardized JSON payloads
<!-- - **Layered** — Layer-2's are offered behind optional interfaces (e.g. Lightning, Liquid, Stacks) -->
- **Sessionless** — No need to maintain a session with the wallet
- **Private & Secure** — Interfaces are designed to be privacy friendly and safe to use
- **Typesafe** — TypeScript types are provided for all interfaces

### `tl;dr`

The specification are split into two parts.
First, the interface for communicating with a wallet via a secure channel, using an injected JavaScript global object.

The following methods are provided via `globalThis.btc`:

- `request(method: string, params?: {}): Promise<any>`
- `listen(event: string, callback: (r) => void, params?: {})`

Secondly, the standardization of how the `method`/`event` names are exepected and how params should be serialized.

## Interface

This document describes an interface for communicating with a web browser wallet.

The main focus is on standardizing a method of serializing named parameters

### `request` — Request interface

#### Examples

```ts
import '@btckit/types';

const address = await globalThis.btc.request('getAddresses', {
  account: 0,
  change: false,
  index: 0,
});
```

:::note
In a web environment, you can also use [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window). The environment-agnostic global variable is [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis).
:::

### `listen` — Event listener interface

#### Examples

```ts
import '@btckit/types';

globalThis.btc.listen('networkChanged', network => {
  console.log('Network switched in wallet', network);
});
```

:::note
Wallets can decide on how handle unimplemented methods (or make it configurable to the user).
E.g. an unimplemented method could throw an error, or return an error object, or be "dropped" and stuck indefinitely.
:::

---

### JSON RPC 2.0

(with named parameters recommended over positional parameters)

#### Modifications

In general, the JSON RPC 2.0 spec is followed, with the following recommendations:

- Prefer named parameters over positional parameters
<!-- - Use `camelCase` for method names -- not super compatible with webbtc, maybe stay case insensitive -->

---

## Layers

Any other layers on top of Bitcoin are offered behind optional interfaces, which follow the same standard as previously described.

The only difference is that the method and event names are prefixed with the layer/chain name.

Examples

- for Lightning the an example method is `ln_getInvoice`
- for Stacks the an example method is `stx_getAddress`
