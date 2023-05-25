// Big O Notation
// We talk about efficiency of the code
// with big O notation we can say withe code is better, we want our code to run faster than the other
// so we use big O notation.
// Its like we compare time of execution of the code.(Time Complexity) 
// The number of operations.
// With big O we measure space complexity, (use more memory or less memory)

// Omega
// Omicron (Theta)
//  Big O

[1,2,3,4,5,6,7]

// If we are looking for 1, then it will be our best case scenario. (Omega)
// If we are looking for 4, then it will be our average case scenario. (Omicron)
// If we are looking for 7, then it will be our worst case scenario. (Big O). so big O is always worst case scenario.

// Example 1
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
logItems(10) // O(n) it will run 10 times

// Drop the constants

// Example 2
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    for (let j=0 ; j < n; j++) {
        console.log(j);
    }
}

logItems(3) // O(n) + O(n) = O(2n) = O(n) // we drop the constants

// Example 3
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j=0 ; j < n; j++) {
            console.log(i,j);
        }
    }
}

logItems(10) // O(n) * O(n) = O(n^2) 

// If we have nested loops, we multiply the big O of the loops
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j=0 ; j < n; j++) {
            for (let k=0 ; k < n; k++) {
                console.log(i,j,k);
            }
        }
    }
}

logItems(10) // O(n) * O(n) * O(n) = O(n^3) 

// Example 4 Drop Non-Dominants 

function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j=0 ; j < n; j++) {
            console.log(i,j);
        }
    }

    for (let k=0 ; k < n; k++) {
        console.log(k);
    }
}

logItems(10) // O(n) * O(n) + O(n) = O(n^2) + O(n) = O(n^2) // we drop the non-dominant
// if we have n = 100 and we have 100² = 10000, so  n² is the dominate term so we drop the non-dominant n= 100

// Example 5 O(1) Constant Time

function addItems(n) {
    return n + n;
}
// number of operations is always the same. so it is O(1)

// Example 6 O(log n) Logarithmic Time
 let array = [1,2,3,4,5,6,7,8]
// The efficient way to search in a sorted array is to divide the array in half and search in the half, ... and we do
// this until we find the element we are looking for.(This technique called divide and conquer)
//if we look for 1 in the given array we will do 3 steps.
// so log(8) = 3) so it is O(log n) [(2^3) = 8]

//The efficient algorithm is :
// 1- O(1) Constant Time
// 2- O(log n) Logarithmic Time
// 3- O(n) Linear Time
// 4- O(n log n) Linearithmic Time
// 5- O(n^2) Quadratic Time

// Different Terms of inputs 

function logItems(a,b) {
    for (let i = 0; i < a; i++) {
        console.log(i);
    }

    for (let j=0 ; j < b; j++) {
        console.log(j);
    }
}

logItems(3,5) // O(a) + O(b) = O(a + b) // we can't drop the constants because they are different terms

function logItems(a,b) {
    for (let i = 0; i < a; i++) {
        for (let j=0 ; j < b; j++) {
            console.log(i,j);
        }
    }
}

logItems(3,5) // O(a) * O(b) = O(a * b) // we can't drop the constants because they are different terms

// Big O of an Array

let myArray = [11,3,23,7]
myArray.push(17) // O(1)
myArray.pop() // O(1)
myArray.shift() // O(n) because we have to re-index all the elements
myArray.unshift(11) // O(n) because we have to re-index all the elements
myArray.splice(1,0, 'Hi') // O(n) because we have to re-index all the elements

// If we look of an element in an array using the value example 7, then it is O(n) because we have to loop through all the elements
// but if we look using the index example myArray[3] then it is O(1) because we know the index of the element
// search by value is O(n), search by index is O(1)

// If we need to access things by index, then we use array, but if we need to add or remove things from the beginning or the middle
// then we use another data structure type.