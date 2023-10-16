// function Value(name, last) {
//     this.name = name;
//     this.last = last;
// }
// let std1 = new Value("codemind", "Technology")
// console.log(std1);
// let std2 = new Value("Bilal", "Shaikh")
// console.log(std2);
// Value.prototype.time = "9:00pm";
// console.log(std1.time);
// console.log(std2.time);

// let check = (std1 instanceof Value)
// console.log(check);

// const array = [1, 2, 3, 4, 5, 6];
// const sum = 0;
// for (let index = 0; index < array.length; index++) {
//     if (index % 2 == 0) {
//         console.log(`Even positioned element:${array[index]}`);
//         sum = sum + array[index];
//     }

// }
// console.log(sum);

// const postInString = `{
//     "userId": 1,
//     "id": 1,
//     "title": "On Trip",
//     "body": "Feeling awesome.. after long break"
// }`
// const jasoncon =JSON.parse(postInString)
// console.log(jasoncon);

// const objtcon =JSON.stringify(jasoncon)
// console.log(objtcon);

var a = [11, 3, 6, 10, 43, 29, 50];

function isPrime(item) {
    if (item <= 1) {
        return false;
    }
    if (item <= 3) {
        return true;
    }
    if (item % 2 === 0 || item % 3 === 0) {
        return false;
    }
    for (var j = 5; j * j <= item; j += 6) {
        if (item % j === 0 || item % (j + 2) === 0) {
            return false;
        }
    }
    return true;
}

var prime = a.filter(function(item) {
    return isPrime(item);
});

console.log("Original Array:", a);
console.log("Prime Numbers in Array:", prime);
console.log("Number of Prime Numbers:", prime.length);
