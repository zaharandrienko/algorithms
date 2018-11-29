

let a = new Object();
a.name = "asdfasdf";



class Employee{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return `name is ${this.name} and age is ${this.age}`
    }
}

let e = new Employee("vahe", 33);
console.log(a.hasOwnProperty("lastname"));
console.log(e.toString());




