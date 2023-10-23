const arrayNum =  [20,11,40,25,23,11,9,31,60,2,19];
               
const addArray = arrayNum.map( (currentValue)=> {
     return currentValue + 10;
});
const cubeArray = arrayNum.map( (currentValue)=> {
     return currentValue*currentValue;
});
const indexArray = arrayNum.map( (currentValue, index )=> {
     return currentValue+index;
});
console.log("Added 10 into each element:",addArray);
console.log("Cube of each Element:",cubeArray);
console.log("Added element and index value of Array:",indexArray);