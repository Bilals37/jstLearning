let leapYear = function(year) {
    if (typeof year === 'number' && !isNaN(year)) {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
      } else {
        console.log(year + " is not a leap year.");
      }
    } else {
      console.log("Invalid input. Please provide a valid numeric year.");
    }
  };
  
  // Testing the function with the given input values
  leapYear(2020);
  leapYear(1999);
  leapYear("Twenty Twenty");
  leapYear(1600);
  leapYear(NaN);
  leapYear(2022);
  leapYear(1945);
  leapYear(null);
  leapYear(1750);
  leapYear(undefined);
 
 
  