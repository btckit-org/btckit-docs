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
type Response = {
  addresses: {
    type: PaymentType;
    address: string;
  }[];
};
```

#### `example`

```ts title=test
const response = await window.btc.request('getAddresses', {
  types: 'p2tr',
});

console.log(response.addresses[0]); // { type: 'p2tr', address: 'bc1q...' }
```
