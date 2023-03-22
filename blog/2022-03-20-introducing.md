---
title: Introducing btckit
tags: [btckit, Bitcoin, Wallet, Standard, Protocol]
description: btckit is a comprehensive wallet standard based on proven Bitcoin ecosystem protocols, offering a unified, secure, and easy-to-use solution for wallet communication.
---

btckit is a Bitcoin wallet standard that aims to facilitate and secure interactions with Bitcoin wallets. The standard is built upon established protocols within the Bitcoin ecosystem. This article examines the fundamental features of btckit and provides examples of how it can improve communication between wallets and applications.

<!--truncate-->

In this article, we will examine the fundamental components of btckit, explore its practical applications, and discuss how it contributes to secure and reliable wallet interactions in the Bitcoin ecosystem.

### btckit Features

btckit uses JSON RPC 2.0 for communication, employing standardized JSON payloads for consistent interactions between wallets and applications. btckit's sessionless design removes the necessity of maintaining a session with the wallet.

Privacy and security are integral aspects of btckit. The interfaces have been designed with these factors in mind, making them suitable for a range of applications. Additionally, btckit incorporates TypeScript types for all interfaces to ensure compatibility and integration with various projects.

### btckit Specification

The btckit specification comprises two main components. The first component addresses the interface for communicating with a wallet through a secure channel, using an injected JavaScript global object. This global object, `window.btc`/`globalThis.btc`, offers two methods: `request` and `listen`.

The `request` method initiates communication with the wallet, while the `listen` method allows developers to subscribe to specific events from the wallet.

The second component of the btckit specification pertains to the standardization of method and event names and the serialization of parameters. This standardization is intended to facilitate developers' understanding and integration of btckit into their projects.
