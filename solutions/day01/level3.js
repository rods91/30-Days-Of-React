// Level 3

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

const minValue = ages[0];
const maxValue = ages[ages.length - 1];

const agesLength = ages.length;
console.log(agesLength);

console.log("Min Value", minValue);
console.log("Max Value", maxValue);

if (agesLength % 2 == 0) {
  console.log(
    "Median is ",
    (ages[agesLength / 2] + ages[agesLength / 2 + 1]) / 2
  );
} else {
  console.log("Median is ", ages[Math.floor(agesLength / 2)]);
}

let total = 0;
for (let i = 0; i < agesLength; i++) {
  total += ages[i];
}
const average = total / agesLength;
console.log("The average is", average);

console.log("Age range is", maxValue - minValue);

console.log("Min avg comparison", Math.abs(minValue - average));
console.log("Max avg comparison", Math.abs(maxValue - average));

//1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
console.log(countries.slice(0, 10));

//2
if (countries.length % 2 == 0) {
  console.log("Middle country is ", countries[countries.length / 2]);
} else {
  console.log(
    "Middle countries are",
    countries[Math.floor(countries.length / 2) - 1],
    "and",
    countries[Math.floor(countries.length / 2)]
  );
}

//3
let newArray;
if (countries.length % 2 != 0) {
  newArray = countries.slice(0, Math.floor(countries.length / 2) + 1);
} else {
  newArray = countries.slice(0, countries.length);
}

console.log(newArray);
