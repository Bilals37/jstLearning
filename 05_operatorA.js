console.log('');
console.log(`======================== Q.1 =========================`);
function squareOfWordLength(word) {
    var length = word.length;
    var square = length * length;
    console.log(`Given string is = ${word}`);
    console.log(`length of string is = ${length}`);
    console.log(`The square of the length of "${word}" is ${square}`);
    console.log(`--------------------------------------------------`);
}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log('');
console.log(`======================== Q.2 =========================`);
function manipulateString() {
    var inputString = "I am Angular Developer";
    var words = inputString.split(' ');
    var totalWords = words.length;
    var totalLength = inputString.length;

    var result1 = totalLength / totalWords;
    var result2 = totalLength * totalWords;
    console.log(` length of string is = ${inputString.length} and number of words in string is = ${totalWords}` );
    console.log(` Total length divided by total words = ${result1}`);
    console.log(` Total length multiplied by total words = ${result2}`);
}

manipulateString();
