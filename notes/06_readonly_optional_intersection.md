# 06 · readonly, Optional, Intersection

```ts
type User = {
  readonly _id: string    // can't be changed later
  card?: number           // optional
}
type Card = CardNumber & CardDate & { cvv: number }
```

- **`readonly`**: can be set once and never changed.
- **`?`**: the property may be missing.
- **`&`**: combines types, and the value must have **all** their properties.
