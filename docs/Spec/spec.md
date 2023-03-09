---
title: Spec
---

## Introduction

BtcKit aims to be a simple, easy to use, and secure Bitcoin wallet standard — inspired by and built on top of proven standards in the Bitcoin ecosystem.

BtcKit lays out how to communicate with a Bitcoin wallet, and how to handle the responses.

- **JSON RPC 2.0** — Communication via safe standardized JSON payloads
- **Layered** — Layer-2's are offered behind optional interfaces (e.g. Lightning, Liquid, Stacks)
- **Sessionless** — No need to maintain a session with the wallet
- **Private & Secure** — Interfaces are designed to be privacy friendly and safe to use
- **Typesafe** — Typescript types are provided for all interfaces

### `tl;dr`

Two simple methods on a global `window.btc` object.

- `request(method: string, params?: {}): Promise<any>`
- `listen(event: string, callback: () => void, params?: {})`

## Interface

This document describes an interface for communicating with a web browser wallet.

The main focus is on standardizing a method of serializing named parameters

### `request` — Request interface

#### Examples

```ts
import "@btckit/types";

const address = await window.btc.request("getAddress", {
  account: 0,
  change: false,
  index: 0,
});
```

### `listen` — Event listener interface

#### Examples

```ts
import "@btckit/types";

window.btc.listen("networkChanged", (network) => {
  console.log("Network switched in wallet", network);
});
```

### JSON RPC 2.0

(with named parameters recommended over positional parameters)
