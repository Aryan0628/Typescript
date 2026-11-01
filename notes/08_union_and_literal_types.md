# 08 · Union & Literal Types

```ts
let score: number | string = 33          // union: one OR the other
let seat: "aisle" | "middle" | "window"  // literal: only these exact values
const a: string[] | number[]             // all strings OR all numbers
const b: (string | number)[]             // mixed is OK
```

- With a union, **check the type first** (`typeof`) before calling type-specific methods.
