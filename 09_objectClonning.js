let firstName = "Gajanan";
let lastName = "Kharat";

let myName = firstName; // Deep Clone

console.log(myName);
firstName = 'GK';
console.log(myName);

myName = 'Ganesh';

let person = {
    name: 'Elon',
    city: 'Pune',
    isMarried : true
}
let elonPerson = {
    country: "USA"
}
elonPerson = person; // Shallow clone

elonPerson.city= "Mumbai";
console.log(elonPerson.city); // 
console.log(person.city);