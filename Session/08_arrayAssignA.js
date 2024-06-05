const fruits =["Banana","Orange", "Apple", "Mango", "Water Melon"];
console.log("First and last Element of Array");
console.log(fruits[0],fruits[fruits.length - 1]);
console.log("===============================================");
console.log(" ");
console.log("Added element Papaya before the element Banana ");
fruits.splice(0,0,"Papaya")
console.log(fruits);
console.log("===============================================");
console.log(" ");
console.log("Removed Mango from the array")
fruits.splice(4,1)
console.log(fruits);
console.log("===============================================");
console.log(" ");
console.log("Inserted an element Pineapple at the last position");
fruits.push("pineapple")
console.log(fruits);
console.log("===============================================");
console.log(" ");
console.log("Inserted an element  Dragon Fruit before “Water Melon");
fruits.splice(4,0,"Dragon Fruit")
console.log(fruits);
console.log("===============================================");
console.log(" ");
console.log(" Replace an element Orange with Kiwi");
fruits.splice(2,1,"Kiwi")
console.log(fruits);
console.log("===============================================");
console.log(" ");
console.log("Log the elements starting from index 1 to 4");
const arrayElements =fruits.slice(1,4);
console.log(arrayElements);
console.log("===============================================");
console.log(" ");
console.log("select last 3 element and log on console: Use the length property");
const lastThree= fruits.slice(-3);
console.log(lastThree);

console.table(fruits)

