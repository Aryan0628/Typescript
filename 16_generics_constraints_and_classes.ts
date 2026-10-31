interface DataBase{
    connection:string,
    username:string,
    password:string
}
function anotherFunction<T,U extends DataBase>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3,{connection:"f",username:"f",password:"f"})
interface Quiz{
    name:string,
    type:string
}
interface Course{
    name:string,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}

