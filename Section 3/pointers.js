// Pointers 
// A pointer is a variable that stores the memory address of another variable.

let num1 = 10;
let num2 = num1;
num1 = 20;
console.log(num1); // 20
console.log(num2); // 10

let obj1 = {
    value: 11
}
// obj1 is a pointer to the object

let obj2 = obj1; // like we say make obj2 point to the same object as obj1.

obj1 // { value: 11 }
obj2 // { value: 11 }

// if we do this:
obj1.value = 22;
obj1 // { value: 22 }
obj2 // { value: 22 }

// if we do this:
let obj3 = {
    value: 57
}

obj1 = obj3; // obj1 now points to obj3
obj2 = obj3; // obj2 now points to obj3

