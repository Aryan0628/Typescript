const score: Array<number> = []
const names: Array<string> = []
function identityOne(val: boolean | number): boolean | number {
    return val
}
function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(true)
identityTwo(true)
//The main difference between using any and using a generic type in TypeScript is that any completely disables type checking, while generics preserve it. When you use any, TypeScript doesn’t care what type of value is passed or returned, so you lose all type safety — the compiler cannot warn you if you make a mistake. In contrast, when you use a generic like <Type>, TypeScript remembers the specific type you passed to the function and ensures that both the input and the output have that same type. This means generics provide type inference, consistency, and compile-time safety, whereas any provides flexibility but no protection against errors.

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}
type Bottle2 = {
    brand: string,
    type: number
}
identityFour<Bottle>({ brand: "abc", type: 123 });   // works
identityFour<Bottle2>({ brand: "xyz", type: 456 });