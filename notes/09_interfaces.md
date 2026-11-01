# 09 · Interfaces

```ts
interface User { readonly id: number; googleId?: string; start(): string }
interface User { token: string }               // merges with the one above
interface Admin extends User { role: "admin" | "ta" }
```

**interface vs type**
| | interface | type |
|---|---|---|
| Extend | `extends` | `&` |
| Merging | Yes | No |
| Unions / tuples / primitives | No | Yes |

**Interview line:** "I use interfaces for objects and classes, and `type` for unions and tuples."
