//these public and private are access modifiers
class User {
    protected _courseCount = 1 //now this will be available in this class and other clases that inhertirng this class
    readonly city: string = "Jaipur"
    constructor(
        public name: string,
        public email: string,
        private userId: string
    ) { }
    private deleteToken() {
        console.log("Token declared")
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    //not always means use on private also on public with additinal logic 
    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one")
        }
        this.courseCount = courseNum
    }
    //setters and geeters are designed so that any private method can be exposed outside but with additional logic 
    //in setter no return type

}
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4 //to access this in inherited class use protected
    }
}
const hitesh = new User("h@h.com", "hitesh", "232")
//hitesh.deleteToken() this will not work 
