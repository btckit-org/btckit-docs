---
title: request-getAddresses
slug: /requests/getaddresses
---

#### `request` `'getAddresses'`

```ts
globalThis.btc.request('getAddresses', params);
```

#### `params` type

```ts
type Params = {
  types: PaymentType[];
};

type PaymentType = 'p2pkh' | 'p2sh' | 'p2wpkh-p2sh' | 'p2wpkh' | 'p2tr';
```

#### `response`

```ts
type ResponseResult = {
  addresses: {
    type: PaymentType;
    address: string;
  }[];
};
```

#### `example`

```ts
const response = await window.btc.request('getAddresses', {
  types: 'p2tr',
});

console.log(response);
// {
//   jsonrpc: '2.0',
//   id: 'getInfo',
//   result: [{
//     type: 'p2tr',
//     address: 'bc1q...',
//   }],
// }
```
