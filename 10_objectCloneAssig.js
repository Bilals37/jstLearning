let personalDetails = {
    name: "Mohit Sharma",
    city: "Delhi",
    contactDetails: {
        mobileNum: 8658748932,
        emailAddr: "mohitsharma37@gmail.com",
        linkedIn: "mohitsharma37",
    },

}

let collegeDetails = {
    name: "Delhi University Engineering College",
    degree: "B.E(Comp)",
    passingYear: 2023,
    cgpa: 8.60,
}
Object.assign(personalDetails,collegeDetails)

// Object.assign(stdDetails,personalDetails,collegeDetails)
console.log(`Merged Details: ${personalDetails}`)
console.table(personalDetails);

let friends = ["Rohit","Kumar","Prem","Rahul","Tejasvi"]
var freez= Object.freeze(friends)
console.log(freez);

for (const element of friends) {
    console.log(element);
  }

  var str='Codemind Technology';
  var reverse ="";
  for (let index = str.length-1; index >= 0; index--) {
      if (str.charAt(index)== " ") {
          break;
      }
      else{
          reverse = reverse + str.charAt(index);
      }
      
  }
  console.log(`6==> Reverse Second word of "${str}" is : "${reverse}"`);