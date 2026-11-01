# 11 · Classes Basics

```ts
class User {
  email: string
  private readonly city = "Jaipur"
  constructor(email: string) { this.email = email }
}
```

- Properties are `public` by default.
- `private` = can only be used inside the class.
- `readonly` = can't be changed after it is set.
