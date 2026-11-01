# 13 · Abstract Classes

```ts
abstract class TakePhoto {
  abstract getSepia(): void        // child MUST write this
  getReelTime() { return 8 }       // a normal method that is shared
}
class Insta extends TakePhoto { getSepia() {} }
```

- You **can't** do `new TakePhoto()`.
- It is a blueprint that can also contain real code.
- A child that `extends` it must call `super(...)` in its constructor.

**Abstract vs interface:** an abstract class has code and you can extend only one. An interface is only a shape and you can implement many.
