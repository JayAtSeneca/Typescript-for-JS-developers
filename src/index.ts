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
