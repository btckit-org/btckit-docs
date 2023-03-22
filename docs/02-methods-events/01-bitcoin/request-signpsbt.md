---
title: request-signPsbt
slug: /requests/signpsbt
---

#### `request` `'signPsbt'`

```ts
globalThis.btc.request('signPsbt', params);
```

#### `params` type

`todo`

#### `response`

```ts
type ResponseResult = {
  psbtHex: string;
  inputToSign: {
    sigHash: any[];
  }[];
  network: any;
};
```

#### `example`

```ts
const response = await window.btc.request('signPsbt', {});

console.log(response);
// {
//   jsonrpc: '2.0',
//   id: 'getInfo',
//   result: 'todo'
// }
```
