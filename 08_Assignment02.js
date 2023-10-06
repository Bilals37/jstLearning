const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`Total Length of Array is "${arrayNumber.length}"`);
console.log("===============================================");

console.log("First element and last element in array is" ,arrayNumber[0],"and",arrayNumber[arrayNumber.length-1]);
console.log("===============================================");

console.log(`The third last elements is "${arrayNumber[arrayNumber.length-3]}"`);
console.log("===============================================");
console.log("Even Numbers in Array are");
for (const index in arrayNumber) {
    if (arrayNumber[index]%2===0) {
        console.log(arrayNumber[index]);
    }
}
console.log("===============================================");
console.log("Odd Numbers in Array are");
for (const index in arrayNumber) {
    if (arrayNumber[index]%2!=0) {
        console.log(arrayNumber[index]);
    }
}

console.log("===============================================");
let even = 0;
console.log(`Even Position Elements are`);
for (let index = 0; index < arrayNumber.length; index+=2) {
  even += arrayNumber[index];
  console.log(arrayNumber[index]);
}
console.log(`Sum of Even Position Elements is"${even}"`);

console.log("===============================================");
let odd = 0;
console.log(`Odd Position Elements are`);
for (let index = 1; index < arrayNumber.length; index+=2) {
  odd += arrayNumber[index];
  console.log(arrayNumber[index]);
}
console.log(`Sum of odd Position Elements is "${odd}"`);

console.log("===============================================");
let sum=0;
for (let index = 0; index <arrayNumber.length; index++) {
   sum += arrayNumber[index];
  
}
console.log(`The Sum of all Array Element is "${sum}"`);

console.log("===============================================");
for (const index in arrayNumber) {
  if (arrayNumber[index]%5===0) {
      console.log(arrayNumber[index]);
  }
}


function searchEle(value) {
  console.log("===============================================");
  if (arrayNumber.includes(value)) {
    console.log(`Yes The Element "${value}" is available in array`);
  }else{
    console.log(`No The Element "${value}" is NOT available in array`);
  }
}
searchEle(115)
searchEle(23)

console.log("===============================================");
arrayNumber.splice(3,0,55,66)
console.log(arrayNumber);

console.log("===============================================");
arrayNumber.splice(4,3)
console.log(arrayNumber);