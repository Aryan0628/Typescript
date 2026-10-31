let score: number | string = 33

score = 44
score = "55"


type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let hitesh: User | Admin = { name: "hitesh", id: 334 }
hitesh = { username: "hc", id: 334 }

function getDbId(id: number | string) {
    //making some api calls
    console.log(`DB is ${id}`)
    if (typeof id === "string") {
        id.toLowerCase()
    }
    if (typeof id === "number") {
        id + 2;
    }
}



//array
const data: number[] = [1, 2, 3] //only array of numbers
const data1: string[] | number[] = ["1", "2", "3"] //all numbers or all strings
const data2: (string | number)[] = ["1", "2", 3] //both combinaiton can be used 

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle";
//seatAllotment="aryan"; //will give error



getDbId(3)
getDbId("3")