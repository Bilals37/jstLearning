const greet = () => {
    console.log("Good Morning, Today is Wednesday");
};

greet();

const multiply = (a, b, c = 1) => {
    const result = a * b * c;
    console.log(`Multiplication result: ${result}`);
};

multiply(5, 5, 2);
multiply(10, 4);

const add= (a, b, c, d, e) => {
    const result = a + b + c + d + e;
    return result;
};

const result1 = add(100, 100, 200, 349, 756);
console.log(`Addition of received params is: ${result1}`);

const result2 = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`Addition of string is: ${result2}`);
