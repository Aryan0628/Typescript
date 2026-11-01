# 02 · Variables & Types

```ts
let name: string = "Aryan"
let id: number = 5        // there's no int/float, everything is `number`
let ok: boolean = false
let x = 5                 // inferred as number, no annotation needed
```

- **Inference**: TS works out the type for you, so skip the annotation when it's obvious.
- **`any`** turns type checking off. Avoid it.
- **`noImplicitAny`** flag: reports an error wherever TS would quietly fall back to `any`.
