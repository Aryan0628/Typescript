interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    //startTrail:()=>string
    startTrial(): string
    getCoupon(couponname: string, value: number): number

}
interface User {
    gitHubToken: string
}
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = {
    dbId: 22, email: "h@h.com", userId: 2211,
    gitHubToken: "github",
    role: "admin",
    startTrial: () => {
        return "trial sorted"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}

"For the majority of cases, they are interchangeable when defining objects. However, my rule of thumb is to use Interfaces as the default for objects and class structures, because they support declaration merging and feel more natural for Object-Oriented patterns. I exclusively use Types when I need features that interfaces don't support, such as defining primitives, writing complex Union types, or creating Tuples."
