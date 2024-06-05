const arrayRollNum=[113,45,56,11,32,45,109,799,56,45]
const reverseArray= arrayRollNum.reverse()
console.log(`Reverse the array`);
console.log(reverseArray);

const sortArray= arrayRollNum.sort()
console.log(`sorted Array as it is without any custom sorting logic`);
console.log(sortArray);

console.log(`The array in ascending order, by writing custom logic`);
const sortAscen=arrayRollNum.sort((a,b)=>{
    return a>b ? 1:-1
})
console.log(sortAscen);

console.log("The Greatest number from the array",sortAscen[sortAscen.length-1]);
console.log("The smallest number from the array",sortAscen[0])

// const dupliElem= new Set(sortAscen)
// console.log(dupliElem);
dupliElem = [...new Set(sortAscen)];
console.log(`Removed duplicates elements from array`);
console.log(dupliElem);