let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log("Even element of given Array are ");
for (let index = 1; index < arrayNumbers.length;index+=2) {
    console.log(`${arrayNumbers[index]}`);
}


let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index];
}
console.log(`===========================================`);
console.log(`Sum of array Elements ${arrayNumbers} is: "${sum}"`);





// let arrayumbers = [22, 11, 44, 55, 77, 33];

// // 1. Find the even positioned values and display them in one line
// let evenPositionedValues = [];
// for (let i = 1; i < arrayumbers.length; i += 2) {
//     evenPositionedValues.push(arrayumbers[i]);
// }
// console.log("Even positioned values in one line: " + evenPositionedValues.join(', '));

// // 2. Sum the array elements and log the result
// let sm = 0;
// for (let i = 0; i < arrayumbers.length; i++) {
//     sm += arrayumbers[i];
// }
// console.log("Sum of array elements:", sm);

