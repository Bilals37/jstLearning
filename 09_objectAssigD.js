const professer = {
    name: "Mohit Sharma",
    address: "Delhi, India",
    PinCode: 110001,
    mobile: 9854725623,
    email: "mohit.sharma@gmail.com",
    degrees: {
        engineering: "CSC",
        phd: "ADV Computing",
    },
    certificate: ["Hacker Rank", "ADV Programming","IEF", "Database Management"],
    experience: {
        currentOrg: ["Tata Consultancy Services"],
        pastOrg: ["Flipkart", "Uber"],
    }

}

professer.experience.totalExp="14 Years",
console.log("=======================================================");
console.log("Before Update ==>");
console.log(JSON.stringify(professer, null, 4));
professer.certificate.push("Oracle");
console.log("=======================================================");
console.log("After Update ==>");
console.log(JSON.stringify(professer, null, 4));
console.log("=======================================================");
console.log(`Last element in array Certificate is "${professer.certificate[professer.certificate.length-1]}"`);
console.log("=======================================================");
console.log("Complete Object ==>");
console.log(JSON.stringify(professer, null, 4));