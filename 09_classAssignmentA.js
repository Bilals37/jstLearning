// 09_classAssigA.js

// Define a class for Vehicle
class Vehicle {
    constructor(company, model, year, color, mileage) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }
}

// Create 5 objects from Vehicle class
const vehicle1 = new Vehicle('Toyota', 'Camry', 2020, 'Silver', 25000);
const vehicle2 = new Vehicle('Honda', 'Civic', 2019, 'Black', 30000);
const vehicle3 = new Vehicle('Ford', 'F-150', 2021, 'Red', 20000);
const vehicle4 = new Vehicle('Chevrolet', 'Malibu', 2018, 'Blue', 35000);
const vehicle5 = new Vehicle('Nissan', 'Altima', 2017, 'White', 40000);

// Add the vehicles into an array
const arrayOfVehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];

// Traverse and log the details
for (const element of arrayOfVehicles) {
    console.log(element);
 }

// Define a class for College
class College {
    constructor(name, location, coursesOffered, foundedYear) {
        this.name = name;
        this.location = location;
        this.coursesOffered = coursesOffered;
        this.foundedYear = foundedYear;
    }

    display() {
        console.log(`College Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Courses Offered: ${this.coursesOffered}`);
        console.log(`Founded Year: ${this.foundedYear}`);
        console.log('\n');
    }
}

// Create 4 objects from College class
const college1 = new College('Tata Institute of Social Sciences (TISS)', 'Mumbai', ['Computer Science', 'Mathematics'], 1990);
const college2 = new College('Symbiosis Institute of Business Management (SIBM):', 'Pune', ['Engineering', 'Business'], 1985);
const college3 = new College('National Institute of Fashion Technology (NIFT)', 'Pune', ['Medicine', 'Nursing'], 2000);
const college4 = new College('College of Engineering, Pune (COEP)', 'Pune', ['Arts', 'Music'], 1978);

// Invoke the display() method for each college
college1.display();
college2.display();
college3.display();
college4.display();

// Function to traverse an object
function traverseObject(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Call traverseObject() for each college object
console.log('Traversing College 1:');
traverseObject(college1);
console.log("=====================================");
console.log('Traversing College 2:');
traverseObject(college2);
console.log("=====================================");
console.log('Traversing College 3:');
traverseObject(college3);
console.log("=====================================");
console.log('Traversing College 4:');
traverseObject(college4);
