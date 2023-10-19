const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = [...new Set(arrayNum)];

const str = "How are you mate";
const words = str.split(' ');

let transformedStr = "";

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  transformedStr += 
    word.charAt(0).toUpperCase() + 
    word.slice(1, -1).toLowerCase() + 
    word.slice(-1).toUpperCase() + " ";
}

console.log("Array with duplicates removed:", uniqueArray);
console.log("Transformed String:", transformedStr.trim());
