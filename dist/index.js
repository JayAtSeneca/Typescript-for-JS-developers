"use strict";
//Basic types
let id = 5;
let company = 'Jay Chaudhari';
let isPublished = true;
let x = 'Hello';
// Not gonna throw error because type is "any"
x = true;
// Declared an array of numbers
let ids = [1, 2, 3, 4, 5, 6, 7];
//This will give error because the "ids" is an array of numbers
// ids.push('Hello');
let arr = [1, true, 'Hello']; // In this any of types of elements are acceptable
//Tuple
let person = [1, "Jay", true];
//Tuple array
let employee;
employee = [
    [1, "a"],
    [2, "b"],
    [3, "c"]
];
//Union
let pid;
pid = "22";
//Enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
console.log(direction1);
