var dietPlan = (age, height, weight, activitylevel, gender, goal) => {
  let resting, setactivityvalue, totalcalorie, carbohydrate, protein, fat;
  if (activitylevel == "low") {
    setactivityvalue = 1.2;
  } else if (activitylevel == "medium") {
    setactivityvalue = 1.4;
  } else if (activitylevel == "high") {
    setactivityvalue = 1.6;
  }
  switch (gender) {
    case "male":
      resting = 9.99 * weight + 6.25 * height - 4.92 * age + 5;
      totalcalorie = resting * setactivityvalue;
      break;
    case "female":
      resting = 9.99 * weight + 6.25 * height - 4.92 * age - 161;
      totalcalorie = resting * setactivityvalue;
      break;
    case "transgender":
      resting = 9.99 * weight + 6.25 * height - 4.92 * age;
      totalcalorie = resting * setactivityvalue;
      break;
  }
  if (goal == "weightloss") {
    totalcalorie = totalcalorie - 200;
  } else if (goal == "maintainweight") {
    totalcalorie = totalcalorie;
  } else if (goal == "weightgain") {
    totalcalorie = totalcalorie + 200;
  }
  carbohydrate = ((totalcalorie / 100) * 55) / 4;
  protein = ((totalcalorie / 100) * 25) / 4;
  fat = ((totalcalorie / 100) * 20) / 9;
  return {
    totalcalorie: parseInt(totalcalorie),
    carbohydrate: parseInt(carbohydrate),
    protein: parseInt(protein),
    fat: parseInt(fat),
  };
};
console.log(dietPlan(28, 163, 70, "medium", "male", "maintainweight"));
