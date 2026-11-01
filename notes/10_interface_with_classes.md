# 10 · Interfaces with Classes

```ts
interface TakePhoto { cameraMode: string; burst: number }
class Instagram implements TakePhoto {
  constructor(public cameraMode: string, public burst: number) {}
}
```

- `implements` = the class **must** have everything the interface lists.
- A class can implement **many** interfaces: `implements A, B`.
- **Note:** in this file `Youtube` has `createStory()` but doesn't say `implements Story`, so TS never checks it against `Story`.
