# 04 · Objects

```ts
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
createUser({ name: "A", isPaid: true })
```

- You can type an object parameter inline.
- Passing a **literal** with extra properties gives an error.
- Passing a **variable** with extra properties is allowed. (This is a well-known gotcha.)
- `(): {}` means the function returns an object.
