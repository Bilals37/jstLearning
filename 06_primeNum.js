const num = 7;
function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
const result = isPrimeNumber(11);
console.log(`Is Number Prime: ${result}`);

const array = [10,5,8,20];
function isPrimeNumber(array){
    for (let index = 2; index < array[index]; index++) {
        if (array[index]%index==0) {
            return false;
        }
    }
    return true;
}
