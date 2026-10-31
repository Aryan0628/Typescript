interface Bootle{
    brand:string,
    type:number
}

function getSearchProducts<T>(products:T[]):T{
    const myIndex=3
    return products[myIndex]
}

const getsomething=<T,>(products:T[]):T=>{
    const myIndex=4
    return products[myIndex]
}
// T, this will not give error this means generics rather than other tag 