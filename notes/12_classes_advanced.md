# 12 · Classes Advanced

```ts
class User {
  protected _count = 1
  constructor(public name: string, private id: string) {}   // shortcut: declares and assigns
  get count() { return this._count }
  set count(n) { if (n <= 1) throw Error(); this._count = n }
}
class Sub extends User { bump() { this._count = 4 } }   // protected works here
```

| | Class | Subclass | Outside |
|---|---|---|---|
| public | Yes | Yes | Yes |
| protected | Yes | Yes | No |
| private | Yes | No | No |

- **Getters/setters** expose private data with extra logic. A setter has **no return type**.
- **Bug in this file:** the setter does `this.courseCount = ...`, which calls itself forever. Use `this._courseCount`.
