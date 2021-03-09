//This is Cookie Class

class Cookie {
    private readonly flavor: string;
    private readonly hardness: string;

    constructor(flavor: string, hardness: string){
        this.flavor = flavor;
        this.hardness = hardness;
    }

    eat(){
        console.log("Yum!");
    }
}