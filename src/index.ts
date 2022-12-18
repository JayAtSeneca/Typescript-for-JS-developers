//Basic types
let id:number = 5;
let company: string = 'Jay Chaudhari';
let isPublished: boolean = true;
let x: any = 'Hello';
// Not gonna throw error because type is "any"
x = true;
// Declared an array of numbers
let ids: number[] = [1,2,3,4,5,6,7];
//This will give error because the "ids" is an array of numbers
// ids.push('Hello');

let arr: any[] = [1,true,'Hello']; // In this any of types of elements are acceptable

//Tuple
let person:[number, string, boolean] = [1, "Jay", true];
//Tuple array
let employee: [number, string][]

employee = [
    [1,"a"],
    [2, "b"],
    [3, "c"]
]

//Union
let pid: number|string;
pid = "22";

//Enum
enum direction1{
    up,
    down,
    left,
    right
}

// console.log(direction1);

// const user: {
//     id: number
//     name: string
// }={
//     id: 1,
//     name: "John"
// }

//Alternatively
type User = {
    id: number,
    name: string
}
const user: User ={
    id:1,
    name: "John"
}


//Type Assertion
let cid: any = 1;
//let customerID = <number> cid
//Alternatively
let customerID = cid as number;

//Functions
//Function addNum with the return type of number
function addNum(x:number,y:number):number{
    return x + y
}

//Void type, here the function is not returning anything so void type
function log(message:string|number):void{
    console.log(message)
}

//Interfaces
interface UserInterface{
    readonly id: number, // cannot assign it again because it is readonly property
    name: string,
    age?: number // "?" shows that the field is optional
}
const user1: UserInterface ={
    id:1,
    name: "John"
}

interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc = (x:number,y:number):number=> x + y
const sub:MathFunc = (x:number,y:number):number=> x - y

//Classes
interface PersonInterface{
    register():string
}
class Person implements PersonInterface{
    private id: number
    private name: string
    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registered`;
    }
};

const john = new Person(1,"John Doe");
const homer = new Person(2,"Homer");

// console.log(john, homer);

//subclass or derived class
class Employee extends Person{
    position: string
    constructor(id:number, name:string, position:string){
        super(id,name);
        this.position = position;
    }
}
const emp = new Employee(3, 'shawn', 'Developer');

//Generics (same as templates in c++)
function getArray<T>(items: T[]):T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray= getArray<string>(['john','homer', 'shawn']);