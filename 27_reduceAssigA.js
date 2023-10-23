const array_number=[20,11,40,25,37,49,9,90,60,2,19];
const sum = array_number.reduce((runningNum,currentValue)=>{
    return runningNum+currentValue
},0)
console.log("Sum of Array Element using Reduce Method is:",sum);


let sumUsingLoop = 0;
for (let i = 0; i < array_number.length; i++) {
  sumUsingLoop = sumUsingLoop+array_number[i];
}

console.log("Sum of Array Element using traditional loop is:", sumUsingLoop);



