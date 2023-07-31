function marriageEligibility(gender, age) {
  var agecheck = +age;
  if (age < 0 || isNaN(agecheck) || gender == "Other"  ) {
    console.log(`Please provide the valid data for ${gender} and ${age}`);
  } else {
    if (gender == "Male") {
      if (age >= 21) {
        console.log(`You are eligible for marriage`);
      } else {
        console.log(`Yor are not eligible for marriage`);
      }
    } else {
      if (gender == "Female" && age >= 18) {
        console.log(`You are eligible for marraige`);
      } else {
        console.log(`your are not eligible for marriage`);
      }
    }
  }
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("FeMale", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
