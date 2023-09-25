console.log('==>1) Two functions with no arguments and no return type.');
function noArguNoRetu() {
    console.log("Hello Everyone");
    console.log("I Love Javascript");
}
noArguNoRetu();
console.log('================================================');
console.log('==>2) Functions with arguments and log on console.');
function personalDetails(firstName, lastName, collegeName){
  console.log('First Name:',firstName);
  console.log('Last Name:',lastName);
  console.log('College Name:',collegeName);
}
personalDetails ('Bilal', 'Shaikh', 'Jamia Institute of Engineering and Management Studies')
console.log('================================================');
console.log('==>3) Function to swap two values and log before and after swap.');
function swapvalues(arg1,arg2){
    console.log('Before swap ==>', arg1, arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log('After swap ==>', arg1, arg2);
}
swapvalues('Virat', 'Anushka')
swapvalues(1000,2000)

console.log('================================================');
console.log('==>4) Function with 3 parameters to log the addition.');
function addThreevalues(arg1, arg2, arg3){
    var result = arg1,arg2,arg3;
    var result = arg1+arg2+arg3;
    return result;
}
var message=addThreevalues('Hello', ' Good', ' Morning')
var addition= addThreevalues(10.23,600,40);
console.log(message,", The addition of three Values is:", addition);
