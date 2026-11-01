# TypeScript: Interview Revision Notes

Short notes for each file in this repo (`01` to `17`). Read top to bottom before the interview.

**One short note per file:** see [`notes/`](notes/README.md).

---

## 1. What is TypeScript? (`01_intro.ts`)
- A **superset of JavaScript** that adds **static types**.
- **Static checking**: errors are caught while you write code, not at runtime.
- TS is a **development tool**. It compiles (transpiles) to plain JS, and browsers and Node run that JS.
- Compile with `tsc file.ts`. That is why each `.ts` file here has a `.js` twin.

> **Q: Does TypeScript run in the browser?** No. It is compiled to JavaScript first, and types are erased at runtime.

---

## 2. Variables & Basic Types (`02_variables_and_types.ts`)
```ts
let name: string = "Aryan";
let id: number = 334455;     // int, float, double are all just `number`
let isLoggedIn: boolean = false;
let x = 5;                   // type inference: TS already knows it's a number
```
- **Type inference**: you can skip the annotation when TS can work out the type.
- **`any`** turns type checking off. Avoid it. The `noImplicitAny` flag reports implicit `any`s as errors.
- **`unknown`** is the safe version of `any`: you must narrow the type before using the value.

---

## 3. Functions (`03_functions.ts`)
```ts
function addTwo(num: number): number { return num + 2 }
const login = (name: string, isPaid: boolean = false) => {}   // default param
function log(msg: string): void { console.log(msg) }          // returns nothing
function fail(msg: string): never { throw new Error(msg) }    // never returns
```
- **`void`**: the function returns nothing.
- **`never`**: the function *never finishes*. It throws or loops forever.
- Optional parameter: `(name?: string)`.

---

## 4. Objects (`04_objects_basics.ts`)
```ts
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
```
- **Excess property check**: passing an object literal with extra properties gives an error. Passing a *variable* that holds the same object does not, because TS checks variables structurally.

---

## 5. Type Aliases (`05_type_aliases.ts`)
```ts
type User = { name: string; email: string; isActive: boolean };
function createUser(user: User): User { ... }
```
- `type` gives a name to any type: objects, unions, primitives, or tuples.

---

## 6. readonly, Optional, Intersection (`06_readonly_optional_intersection.ts`)
```ts
type User = {
  readonly _id: string;   // can't be changed after creation
  cardDetails?: number;   // optional
};
type CardDetails = CardNumber & CardDate & { cvv: number }; // intersection (&)
```
- **`&` (intersection)**: the value must have **all** the properties of every type.

---

## 7. Tuples & Enums (`07_tuples_and_enums.ts`)
```ts
let user: [string, number, boolean] = ["hc", 131, true];  // fixed order and length
const rgb: readonly [number, number, number] = [255, 56, 35];
enum Seat { AISLE, MIDDLE, WINDOW }   // named constants
```
- **Tuple loophole**: `.push()` still works on a tuple and breaks its structure. Use `readonly` to prevent it.
- Use `const enum`, or a union of string literals, when you want lighter JS output.

---

## 8. Union & Literal Types (`08_union_and_literal_types.ts`)
```ts
let score: number | string = 33;              // union: either type
let seat: "aisle" | "middle" | "window";      // literal type: only these values
const a: string[] | number[] = ["1", "2"];    // all strings OR all numbers
const b: (string | number)[] = ["1", 2];      // mixed
```
- With a union, you must **narrow** (for example with `typeof`) before using methods that only one of the types has.

---

## 9. Interfaces (`09_interfaces.ts`)
```ts
interface User {
  readonly dbId: number;
  googleId?: string;
  startTrial(): string;
}
interface User { gitHubToken: string }       // declaration merging
interface Admin extends User { role: "admin" | "ta" | "learner" }
```

### Interface vs Type (very common question)
| | `interface` | `type` |
|---|---|---|
| Objects / classes | Yes | Yes |
| Extend | `extends` | `&` |
| Declaration merging | Yes | No |
| Unions, primitives, tuples | No | Yes |

> **Answer:** "I use interfaces by default for objects and classes, because they support declaration merging and suit OOP. I use `type` for unions, primitives, and tuples."

---

## 10. Interfaces with Classes (`10_interface_with_classes.ts`)
```ts
class Instagram implements TakePhoto, Story { ... }
```
- `implements` forces the class to follow the interface's shape. A class can implement **several** interfaces.

---

## 11–12. Classes & Access Modifiers (`11_classes_basics.ts`, `12_classes_advanced.ts`)
```ts
class User {
  protected _count = 1;
  readonly city = "Jaipur";
  constructor(public name: string, private userId: string) {}  // parameter properties
  get count() { return this._count }
  set count(n) { if (n <= 1) throw new Error("..."); this._count = n }
}
```
| Modifier | Same class | Subclass | Outside |
|---|---|---|---|
| `public` | Yes | Yes | Yes |
| `protected` | Yes | Yes | No |
| `private` | Yes | No | No |

- **Getters/setters** expose private data with extra logic. Setters have **no return type**.
- `private` is only enforced at compile time. JS `#field` is private at runtime too.

---

## 13. Abstract Classes (`13_abstract_classes.ts`)
```ts
abstract class TakePhoto {
  abstract getSepia(): void;          // subclass MUST implement this
  getReelTime() { return 8 }          // can also have real methods
}
class Instagram extends TakePhoto { getSepia() { ... } }
```
- **You can't create an object** of an abstract class (`new TakePhoto()` gives an error).

> **Q: Abstract class vs Interface?** An abstract class can contain **real code** and a constructor, and a class can extend only one. An interface is **only a shape**, and a class can implement many.

---

## 14–15. Generics (`14_generics_intro.ts`, `15_generics_functions.ts`)
```ts
function identity<T>(val: T): T { return val }
identity<string>("hi");              // T = string
const first = <T,>(arr: T[]): T => arr[0];   // `<T,>` in arrow functions (needed in .tsx)
```
- **Generics vs `any`**: `any` **loses** type information. Generics **keep** it: what goes in determines what comes out.
- `Array<number>` is the same as `number[]`.

---

## 16. Generic Constraints & Generic Classes (`16_generics_constraints_and_classes.ts`)
```ts
function connect<T, U extends DataBase>(a: T, b: U) {}   // U must have DataBase's shape
class Sellable<T> {
  cart: T[] = [];
  addToCart(p: T) { this.cart.push(p) }
}
```
- `extends` in a generic means a **constraint**: "T must have at least these properties".

---

## 17. Type Narrowing (`17_type_narrowing.ts`)
Ways to narrow a union down to one type:
```ts
typeof val === "string"          // primitives
if (!id) return                  // truthiness (null / undefined / "")
x instanceof Date                // classes
"swim" in pet                    // `in` operator
function isFish(p): p is Fish {} // custom type guard (type predicate)
```

### Discriminated Union + Exhaustiveness Check
```ts
type Shape = Circle | Square | Rectangle;   // each has `kind: "circle"` etc.
switch (shape.kind) {
  case "circle": ...
  case "square": ...
  default:
    const _check: never = shape;  // compile error if a case is missing
}
```
- A shared literal field (`kind`) lets TS work out the exact type in each `case`.
- Assigning to `never` makes TS report an error if you add a new shape and forget to handle it.

---

## Quick-Fire Interview Questions
1. **TS vs JS?** TS adds static types and compile-time errors, then compiles to JS.
2. **`any` vs `unknown`?** `unknown` must be narrowed before use. `any` skips all checks.
3. **`void` vs `never`?** `void` returns nothing. `never` never returns at all.
4. **`interface` vs `type`?** See the table in section 9.
5. **What are generics?** Reusable code that keeps type safety.
6. **What is type narrowing?** Refining a union to one specific type with checks.
7. **Abstract class vs interface?** An abstract class can have code. An interface is only a shape.
8. **What does `readonly` do?** It blocks reassignment at compile time.
9. **What is declaration merging?** Two interfaces with the same name combine into one.
10. **What is a type predicate?** A return type like `pet is Fish`, which narrows the type for the caller.
