---
title: request-getAddresses
slug: /requests/getaddresses
---

#### `request` `'getAddresses'`

```ts
window.btc.request('getAddresses', params);
```

#### `params` type

```ts
Params {
  types?: PaymentType[];
};

PaymentType = 'p2pkh' | 'p2sh' | 'p2wpkh-p2sh' | 'p2wpkh' | 'p2tr';
```

#### `response` result type

```ts
ResponseResult {
  addresses: {
    type: PaymentType;
    address: string;
  }[];
};
```

#### `example`

```ts
const response = await window.btc.request('getAddresses', {
  types: ['p2tr'],
});

console.log(response);
// {
//   jsonrpc: '2.0',
//   id: 'c6b783c4-e0fa-4060-8a29-6ca2b45d68cf',
//   result: [{
//     type: 'p2tr',
//     address: 'bc1q...',
//   }],
// }
```
