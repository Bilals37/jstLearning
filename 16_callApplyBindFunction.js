const person = {
    name: "Elon Musk",
    age: 54,
    totalCompany: 9
}
function show(greet){
    console.log('Inside show function...');
    console.log(greet);
    console.log(this.name, this.age);
}
show.call(person, 'Good Morning'); 