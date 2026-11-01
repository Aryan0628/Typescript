# 15 · Generic Functions

```ts
function getItem<T>(arr: T[]): T { return arr[3] }
const getItem2 = <T,>(arr: T[]): T => arr[4]
```

- Generics work with arrays: `T[]` in gives `T` out.
- **Arrow functions:** write `<T,>`. The comma tells TS it is a generic and not a JSX tag.
