# 07 · Tuples & Enums

```ts
let user: [string, number, boolean] = ["hc", 1, true]   // fixed order and length
const rgb: readonly [number, number, number] = [255, 0, 0]
enum Seat { AISLE, MIDDLE, WINDOW }
```

- **Tuple** = an array with a fixed type at each position.
- **Gotcha:** `.push()` still works on a tuple. Add `readonly` to block it.
- **Enum** = a set of named constants.
