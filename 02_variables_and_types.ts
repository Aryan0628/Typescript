let greetings:string="Aryan"

let myNum=6;
greetings.toLowerCase()
//greetings=true

let userId:number=334455
// TypeScript, all numeric types like int, float, double, etc. are treated the same under a single type:number
//in this case you can hav e avoiding the type
let userid=33345
userid.toFixed();
//userid="hitesh" this would give error  
//as ts is aready taking it as a number 

//boolean 
let isLoggedIn:boolean=false

//any 
//any means turn of the type checking for this 
//use the compiler flag noImplicitAny to flag any implicit any as an error 
let hero;
function getHero(){
    return "thor"
}
hero=getHero()






console.log(greetings);

export{}