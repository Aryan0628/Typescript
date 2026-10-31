const user: (string | number)[] = [1, "hc"]

let tUser: [string, number, boolean]
tUser = ["hc", 131, true]

let rgb: [number, number, number] = [256, 56, 35]

type User = [number, string]
const newUser: User = [112, "dgd@gmail.com"]

newUser[1] = "hc.com"
//newUser.push(true) //TypeScript loophole — breaks tuple structure
// can remove this by making tuple read only by adding readonly