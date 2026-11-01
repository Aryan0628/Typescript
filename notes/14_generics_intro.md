# 14 · Generics Intro

```ts
function identity<T>(val: T): T { return val }
identity<string>("hi")   // T = string
identity(true)           // T is inferred as boolean
```

- **Generic** = a type placeholder that gets filled in when the function is called.
- **`any`**: the type is lost and there are no checks.
- **Generic**: the type is **kept**, so what goes in is what comes out.
- `Array<number>` is the same as `number[]`.
