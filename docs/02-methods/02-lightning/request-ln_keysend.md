---
title: request-ln_keysend
slug: /requests/ln_keysend
---

⚡️ [WebLN Guide — `webln.keysend`](https://www.webln.guide/building-lightning-apps/webln-reference/webln.keysend)

#### `request` `'ln_keysend'`

```ts
window.btc.request('ln_keysend', params);
```

#### `params` type

```ts
KeysendArgs {
  destination: string;
  amount: string | number;
  customRecords?: Record<string, string>;
}
```

#### `response` result type

```ts
SendPaymentResponse {
  preimage: string;
}
```

#### `example`

```ts
const response = await window.btc.request('ln_keysend', {
  destination: '03006fcf3312dae8d068ea297f58e2bd00ec1ffe214b793eda46966b6294a53ce6',
  amount: '1',
  customRecords: {
    '34349334': 'HELLO AMBOSS',
  },
});

console.log(response);
// {
//   jsonrpc: '2.0',
//   id: 'c6b783c4-e0fa-4060-8a29-6ca2b45d68cf',
//   result: {
//     preimage: 'todo',
//   },
// }
```
