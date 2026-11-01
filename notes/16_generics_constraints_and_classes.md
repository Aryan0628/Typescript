# 16 · Generic Constraints & Classes

```ts
function fn<T, U extends DataBase>(a: T, b: U) {}   // U must have the DataBase shape

class Sellable<T> {
  cart: T[] = []
  add(p: T) { this.cart.push(p) }
}
new Sellable<Course>()
```

- **`extends` in generics** = a constraint: "U must have at least these properties".
- **Generic class** = one class that works for any type (Quiz, Course, and so on).
