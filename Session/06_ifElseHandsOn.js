function evenOdd(num) {
    if (num % 2===0) {
        console.log(`${num} even`);
    } else {
        console.log(`${num} odd`);
    }
}

evenOdd(59)
evenOdd(90)
evenOdd(44)
evenOdd(29)
evenOdd(60)
evenOdd(92)
evenOdd(78)
evenOdd(32)
evenOdd(2)
evenOdd(3)
evenOdd(10)

console.log("======================================================");
console.log("");

function eligible (age) {
    if (age>=18) {
        console.log(`AGE==> "${age}" you are Eligible of Vote`);
    } else {
        console.log(`AGE==> "${age}" you are Not-Eligible of Vote`);
    }
}

eligible(11)
eligible(41)
eligible(85)
eligible(10)
eligible(25)

console.log("======================================================");
console.log("");

function strCheck(str) {
    var result= str.length;
    if (result >10) {
        console.log(`The length of the string "${str}" is greater than 10 characters.`);
    } else {
        if (result==true){
            console.log(`The length of the string "${str}" is considered true.`);
        }
       else{
        console.log(`The length of the string "${str}" is not greater than 10 characters, and it's not considered true.`);
       }
    }
}
strCheck("Hi Bilal")
strCheck("JavaScript - ES6")
strCheck("I study in Codemind Technology")

console.log("======================================================");
console.log("");

var strJ= "Javascript Lerner"
if (strJ.startsWith("Java")) {
    console.log(`The string "${strJ}" starts with "Java".`);
} else {
    console.log(`The string "${str}" does not start with "Java".`);
}
