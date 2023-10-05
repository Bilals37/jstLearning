function countCharA(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'a' || str[index] === 'A') {
            count++;


        }
    }
    return count;
}

const string1 = "I AM Learning JavaScript, The Language of internet";
const string2 = "My favourite movie is LAggAn";

const count1 = countCharA(string1);
const count2 = countCharA(string2);

console.log(`Total 'a' or 'A' characters in string1: ${count1}`);
console.log(`Total 'a' or 'A' characters in string2: ${count2}`);