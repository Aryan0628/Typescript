const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) { }

createUser({ name: "Hitesh", isPaid: true })
let newuser = { name: "hitesh", isPaid: false, email: "h@h.com" }
createUser(newuser)

function createCourse(): {} {
    return { name: "reactjs", price: 399 }
}
//:{} iska mtlb hai return object kr rha hai 
export { }