function addTwo(num: number): number {
    return num + 2;
    //return "hello"
}
addTwo(5)
function getUpper(val: string) {
    return val.toUpperCase()
}
function signUpUser(name: string, email: string, isPaid: boolean) { }
let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
signUpUser("hitesh", "hitesh@lco.dev", true);
loginUser("h", "h@h.com")
//function getValue(myVal:number):boolean{
//   if(myVal>5){
//return true
//    }
//   return "200 ok"
//}
const getHello = (s: string): string => {
    return " "
}
//const heros=["thor","spiderman","ironman"]
const heros = [1, 2, 3]
//it will automatically swictch 
heros.map((hero): string => {
    return `hero is ${hero}`
})
function consoleError(errmsg: string): void {
    console.log(errmsg);
}
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
//the never type represents value whicha are nevert observed.In a return type,this means that the function throws an exception or terminates execution of the program
export { }