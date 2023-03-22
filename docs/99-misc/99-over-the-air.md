---
title: Over The Air
---

`beta`, `subject to change`

## Introduction

Ecosystems outside of Bitcoin have implemented many different ways of communicating between an application and a wallet. One such approach is [WalletConnect](https://walletconnect.com).

We like some parts of WalletConnect. Technically, all the types defined by btckit can be reused for a WalletConnect session. This makes it possible to initiate a connection via QR codes and encrypted relays, e.g. via mobile app to website in desktop browser.

:::info wip
The chainid should be the respective chain for L2s, if applicable. It can be left empty if none is applicable e.g. Lightning.

Or maybe let's use a specific id for this protocol as the chainid is not needed or should be pushed to the params (or always handled by the wallet itself)?
:::
