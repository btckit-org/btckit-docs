---
title: request-getInfo
slug: /requests/getinfo
---

#### `request` `'getInfo'`

```ts
globalThis.btc.request('getInfo');
```

#### `response`

```ts
type ResponseResult = {
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
//   id: 'getInfo',
//   result: {
//     version: 'v2.1.82',
//     supportedMethods: ['getInfo', 'ln_makeInvoice'],
//   },
// }
```
