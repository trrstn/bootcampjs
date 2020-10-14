/*
  Title:
    Calculate BMI

  Description:
    Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

    if bmi <= 18.5 return "Underweight"

    if bmi <= 25.0 return "Normal"

    if bmi <= 30.0 return "Overweight"

    if bmi > 30 return "Obese"
*/

// Long Solution
const bmi = (weight, height) => {
  return evaluateBmi(calculateBmi(weight, height))
}

const calculateBmi = (weight, height) => {
  return weight / height / height
}

const evaluateBmi = (bmi) => {
  return bmi <= 25.0 ? (bmi <= 18.5 ? 'Underweight' : 'Normal') : bmi <= 30.0 ? 'Overweight' : 'Obese'
}

// Function Export
module.exports = bmi
