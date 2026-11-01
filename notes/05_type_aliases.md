# 05 · Type Aliases

```ts
type User = { name: string; email: string; isActive: boolean }
function createUser(u: User): User { return u }
```

- `type` gives a name to a shape so you can reuse it.
- It works for objects, unions, primitives, and tuples.
