let bankSbi = {
    name:"Mohit Sharma",
    bankName: "State bank of India",
    accNo: 789654123589,
    ifscCode: "SBIN005469",
    userId : 2563417896,
}
console.log("The bankSbi Object Before Clone");
console.table(bankSbi)
let bankLocation = {
    street: "Bank Road",
    city: "Delhi",
    pin: 400011
}

Object.assign(bankSbi,bankLocation)
console.log("The bankSbi Object After Cloning with bankLocation Clone");
console.table(bankSbi)

const clonedBankLocationSpread = { ...bankLocation };
console.log("Spread Operator");
console.table(clonedBankLocationSpread);

let rateOfInterest = {
    homeLone: "12%",
    personalLoneInterest: "15%",
    dueInterest: "17%"
}

const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.log(`Merging Object bankSbi,bankLocation and rateOfInterest in sbiDetails`);
console.table(sbiDetails)

console.log(`Traversing of an object sbiDetails`);
for (const key in sbiDetails) {
   console.log(key, sbiDetails[key]);
}