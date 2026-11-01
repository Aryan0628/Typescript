# 17 · Type Narrowing

Narrowing turns a union into one specific type.

```ts
typeof v === "string"          // primitives
if (!id) return                // truthiness (null / undefined / "")
x instanceof Date              // class instances
"swim" in pet                  // checks whether a property exists
function isFish(p): p is Fish  // custom type guard
```

**Discriminated union** (each type has a shared `kind` field):
```ts
switch (shape.kind) {
  case "circle": ...
  case "square": ...
  default:
    const _x: never = shape    // gives an error if you forget a case
}
```

- The `never` trick = an **exhaustiveness check**.
