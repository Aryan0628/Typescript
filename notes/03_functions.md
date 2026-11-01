# 03 · Functions

```ts
function add(n: number): number { return n + 2 }
const login = (name: string, paid = false) => {}   // default value
function log(m: string): void {}                   // returns nothing
function fail(m: string): never { throw new Error(m) }
```

- Always type your **parameters**. The return type can be inferred, but writing it is clearer.
- **`void`**: returns nothing.
- **`never`**: never finishes (throws an error or loops forever).
