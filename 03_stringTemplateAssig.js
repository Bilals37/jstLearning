function stringTemplate() {
    console.log('(01==>) My dream company is Tata Consultancy Services.');
    var hobby1 = "Cricket"
    var hobby2 = "Programming"
    var hobby3 = "Expolring New Technologys"
    console.log('=======================================================');
    console.log(`(2.1==>) My Hobbies are: ${hobby1}, ${hobby2}, ${hobby3}.`);
    console.log('=======================================================');
    const allHobbies = `${hobby1}, ${hobby2}, ${hobby3}`;
    console.log(`(2.2==>) All my hobbies together are: ${allHobbies}.`);
}
stringTemplate();