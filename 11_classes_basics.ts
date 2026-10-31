class User{
    public email:string
    name:string
    private readonly city:string="Jaipur"
    constructor(email:string,name:string){
        this.email=email;
        this.name=name
    }
}
const hitesh=new User("h@h.com","hitesh")
//hitesh.city if you do not want to read here also then put privagte before readonly

//another way to this is in index2.ts