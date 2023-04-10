---
sidebar_label: signPsbt
slug: /requests/signpsbt
---

# request `'signPsbt'`

#### `request` `'signPsbt'`

```ts
window.btc.request('signPsbt', params);
```

#### `params` type

```ts
Params {
  psbtBase64: string,
  inputsToSign: [{
    address: string,
    signingIndexes: number[], // int array of indexes to sign
  }],
  broadcast: boolean,
}
```

#### `response` result type

```ts
ResponseResult {
  // todo
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
