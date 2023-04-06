---
title: request-getInfo
slug: /requests/getinfo
---

#### `request` `'getInfo'`

```ts
window.btc.request('getInfo');
```

#### `response` result type

```ts
ResponseResult {
  version: string;
  supportedMethods?: string[];
};
```

#### `example`

```ts
const response = await window.btc.request('getInfo');

console.log(response);
// {
//   jsonrpc: '2.0',
//   id: 'c6b783c4-e0fa-4060-8a29-6ca2b45d68cf',
//   result: {
//     version: 'v2.1.82',
//     supportedMethods: ['getInfo', 'ln_makeInvoice'],
//   },
// }
```
