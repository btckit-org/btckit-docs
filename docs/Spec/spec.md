---
title: Spec 🚧
---

## Introduction

BtcKit is a simple, easy to use, and secure Bitcoin wallet standard — inspired by, and built on top of, proven standards in the Bitcoin ecosystem.

BtcKit lays out how to communicate with Bitcoin wallets, and how to handle the responses.

- **JSON RPC 2.0** — Communication via safe standardized JSON payloads
- **Layered** — Layer-2's are offered behind optional interfaces (e.g. Lightning, Liquid, Stacks)
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
import "@btckit/types";

const address = await globalThis.btc.request("getAddress", {
  account: 0,
  change: false,
  index: 0,
});
```

:::note

In a web environment, you can also use [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window). [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) is the environment-agnostic global variable.

:::

### `listen` — Event listener interface

#### Examples

```ts
import "@btckit/types";

globalThis.btc.listen("networkChanged", (network) => {
  console.log("Network switched in wallet", network);
});
```

:::note
Wallets can decide on how handle unimplemented methods (or make it configurable to the user).
E.g. an unimplemented method could throw an error, or return an error object, or be "dropped" and stuck indefinetely.

To reduce the ability to use the interface for fingerprinting, wallets could use implement additional anti-tracking measures.
:::

---

### JSON RPC 2.0

(with named parameters recommended over positional parameters)

#### Modifications

In general, the JSON RPC 2.0 spec is followed, with the following recommendations:

- Prefer named parameters over positional parameters
- Use `camelCase` for method names

---

## Layers

Any other layers on top of Bitcoin are offered behind optional interfaces, which follow the same standard as previously described.

The only difference is that the method and event names are prefixed with the layer/chain name.

Examples

- for Lightning the an example method is `ln_getInvoice`
- for Stacks the an example method is `stx_getAddress`

Your trusted wallet

---

## ☁️ Air

`beta`, `subject to change`

BtcKit recommenda using the WalletConnect standard with the BIP XXX chain id for bitcoin for wallet connections over the "Air" (sort of airgapped) — e.g. initiating a connection via QR codes and encrypted relays.

The chainid should be the respective chain for L2s, if applicable. It can be left empty if none is applicable e.g. Lightning.

Or maybe let's use a specific id for this protocol as the chainid is not needed or should be pushed to the params (or always handled by the wallet itself)
