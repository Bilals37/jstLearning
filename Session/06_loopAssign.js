var result = 0;
for (let index = 0; index <= 5; index++) {
    result = result + index * index * index;
}
console.log(`The sum of 3 Cube number is "${result}"`);
console.log("");
console.log("===============================================");

function oddPositionChar(str) {
    for (let index = 0; index < str.length - 1; index++) {
        if (index % 2 == 0 && str.charAt(index) !== " ") {
            console.log(str.charAt(index));
        }

    }

}
console.log("Character at the odd number index of String are  ");
console.log(" ");
oddPositionChar("Hard work always play back")
oddPositionChar("Soon I will be Ui It Champ")





