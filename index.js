//default exports
// import Stack from "./Stack.js";
//import * as Stack from "./Stack.js"

//import the class Stack from Stack.js
import { Stack } from "./Stack.js";

const stack = new Stack();
stack.push(30);
stack.push(40);
stack.push(50);

const peek = stack.peek();
console.log(peek);

const pop = stack.pop();
console.log(pop);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());
