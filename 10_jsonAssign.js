const employeeJson = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "street": "32, Laham St.",
      "city": "Innsbruck",
      "country": "Austria"
    },
    "referred-by": "E0012"
  }`;

  // Convert the JSON string to an object
  const employeeObj = JSON.parse(employeeJson);
  console.log(employeeObj);

  // Log the 'role' property in uppercase ('Dev')
  console.log("Role:", employeeObj.role[0].toUpperCase());

  // Log only the last name ('Melon')
  const fullName = employeeObj.name.split(" ");
  console.log("Last Name:", fullName[1]);

  // Log only the joining year of the employee ('2019')
  const doj = employeeObj.doj.split("-")[2];
  console.log("Joining Year:", doj);


