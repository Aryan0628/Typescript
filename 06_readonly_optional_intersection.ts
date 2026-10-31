type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number //basically you ca enter this or not 
}
let myuser: User = {
    _id: "1234",
    name: "@h",
    email: "@gmail.com",
    isActive: true
}
myuser.email = "h@gmail.com"
//myuser._id="ff" you can not do this 
type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export { }