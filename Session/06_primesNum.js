const array = [11, 3, 6, 10, 43, 29, 50];

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Function to count prime numbers in the array
function countPrimeNumbers(arr) {
  let count = 0;
  for (const number of arr) {
    if (isPrime(number)) {
      count++;
    }
  }
  return count;
}

const primeCount = countPrimeNumbers(array);
console.log(`Total prime numbers in the '${array}' are : "${ primeCount}"`);






// var a = [11, 3, 6, 10, 43, 29, 50];
// var prime = [];

// function isPrime(item) {
//     var identifier = item / 2;
//       for (var j = 2; j <= identifier; j++) {
//        if ((item % j) == 0) { // modulous
//         return false;
//        } 
//      }
//      return true;
// }
// for (var index = 0; index < a.length; index++) {
//   if (isPrime(a[index])) {
//       prime.push(a[index])
//   }
// }
// console.log(`Number of prime Number in Array :${prime}`);
