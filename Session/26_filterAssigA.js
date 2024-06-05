const arrayNum =  [20,11,40,25,23,11,9,31,60,2,19];

const greterNum = arrayNum.filter ((value)=>{
    return value>50;
})
console.log(`values greter then 50 is: ${greterNum}`);

const evenNum = arrayNum.filter ((value)=>{
    return value%2==0;
})

console.log(`All even Numbers are: ${evenNum}`);

const oddNum = arrayNum.filter ((value)=>{
    return value%2!=0;
})
console.log(`All odd Numbers are: ${oddNum}`);

const multipleNum = arrayNum.filter ((value)=>{
    return value%5==0;
})
console.log(`Elements which are multiple of 5 are: ${multipleNum}`);

const betwNum= arrayNum.filter((value)=>{
    return value>=20 && value<=50;
})
console.log(`Elements between 20 and 50 are: ${betwNum}`);