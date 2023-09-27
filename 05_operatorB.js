console.log(`(1==>)`);
function greterNumber(num1, num2){
    var greaterNum= num1 > num2 ? num1 : num2
    console.log(`Greter Number between '${num1}' and '${num2}' is = ${greaterNum}`);
}
greterNumber (10,-10)
greterNumber (800,899)

console.log(`----------------------------------------`);
console.log(`(2==>)`);
function isEvenOrOdd(num) {
    var result = num % 2 === 0 ? 'Even' : 'Odd';
    return result;
}

var num1Result = isEvenOrOdd(29);
console.log(`The number 29 is ${num1Result}`);
var num2Result = isEvenOrOdd(44);
console.log(`The number 44 is ${num2Result}`);
var num3Result = isEvenOrOdd(0);
console.log(`The number 0 is ${num3Result}`);
var num4Result = isEvenOrOdd(101);
console.log(`The number 101 is ${num4Result}`);

console.log(`----------------------------------------`);
console.log(`(3==>)`);
function wordLength(word) {
   var result= word.length % 2 === 0 ? 'EVEN' : 'ODD';
    return result
}

var word1Result = wordLength("JavaScript");
console.log(`Length of JavaScript is ${word1Result}`);

var word2Result = wordLength("developer");
console.log(`Length of developer is ${word2Result}`);

var word3Result = wordLength("Google");
console.log(`Length of Google is ${word3Result}`);