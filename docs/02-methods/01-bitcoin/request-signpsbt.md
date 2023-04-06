---
title: request-signPsbt
slug: /requests/signpsbt
---

#### `request` `'signPsbt'`

```ts
window.btc.request('signPsbt', params);
```

#### `params` type

`todo`

#### `response` result type

```ts
ResponseResult {
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
//   id: 'c6b783c4-e0fa-4060-8a29-6ca2b45d68cf',
//   result: 'todo'
// }
```
