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

### Notes & Alterations

#### Case Sensitivity

Methods should be case insensitive. (Following webbtc lowercase convention)

### `exactMethods`

`coming soon`

## Events

`coming soon`

---

## Layers

Any other layers on top of Bitcoin are offered behind optional interfaces, which follow the same standard as previously described.

The only difference is that the method and event names are prefixed with the layer/chain name.

Examples

- for Lightning an example method could be `ln_getInvoice`
- for Stacks an example method could be `stx_getAddresses`

The exact definition of the methods on these layers are not officially part of the standard. They may be standardized by the respective ecosystems and communities.
