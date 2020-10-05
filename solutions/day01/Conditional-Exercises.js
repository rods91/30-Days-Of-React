// Level 1

//1
let userInput = prompt("Please enter your age:");

switch (true) {
  case userInput >= 18:
    console.log("You are old enough to drive");
    break;
  default:
    console.log("Wait for", 18 - userInput, "years");
}

//2
const myAge = 29;
let yourAge = prompt("Please enter your age:");

if (yourAge > myAge) {
  console.log("You are older then me");
} else if (yourAge == myAge) {
  console.log("We are the same age");
} else {
  console.log("Im older than you!");
}

//3
let a = 4;
let b = 3;

if (a > b) {
  console.log(a, "is greater than", b);
} else if (a == b) {
  console.log(a, "is equal to", b);
} else {
  console.log(b, "is greater than", a);
}

//4
let numberInput = prompt("Enter a number:");

if (numberInput % 2 == 0) {
  console.log(`${numberInput} is an even number`);
} else {
  console.log(`${numberInput} is an odd number`);
}

//Level 2

//1
const myGrade = 90;
switch (true) {
  case myGrade >= 90 && myGrade <= 100:
    console.log("A");
    break;
  case myGrade >= 70 && myGrade <= 89:
    console.log("B");
    break;
  case myGrade >= 60 && myGrade <= 69:
    console.log("C");
    break;
  case myGrade >= 50 && myGrade <= 59:
    console.log("D");
    break;
  case myGrade >= 0 && myGrade <= 49:
    console.log("F");
    break;
  default:
    break;
}

//2
let monthInput = prompt("Please enter a month:");
const month = monthInput.toLowerCase();

switch (true) {
  case ["september", "october", "november"].includes(month):
    console.log("Autum");
    break;
  case ["december", "january", "february"].includes(month):
    console.log("Winter");
    break;
  case ["march", "april", "may"].includes(month):
    console.log("Spring");
    break;
  case ["june", "july", "august"].includes(month):
    console.log("Summer");
    break;
  default:
    break;
}

//3
let dayInput = prompt("What is the day today?");
const dayLower = dayInput.toLowerCase();
if (
  dayLower == "monday" ||
  dayLower == "tuesday" ||
  dayLower == "wednesday" ||
  dayLower == "thursday" ||
  dayLower == "friday"
) {
  console.log(`${dayInput} is a working day.`);
} else if (dayLower == "saturday" || dayLower == "sunday") {
  console.log(`${dayInput} is a weekend.`);
}

// Level 3

//1
const months = [
  { month: "january", days: 31 },
  { month: "february", days: 28 },
  { month: "march", days: 31 },
  { month: "april", days: 30 },
  { month: "may", days: 31 },
  { month: "june", days: 30 },
  { month: "july", days: 31 },
  { month: "august", days: 31 },
  { month: "september", days: 30 },
  { month: "october", days: 31 },
  { month: "november", days: 30 },
  { month: "december", days: 31 },
];

let userMonthInput = prompt("Enter a month to get the number of days it has");
const userMonth = userMonthInput.toLowerCase();

if (userMonth) {
  console.log(months.find((month) => month.month == userMonth).days);
}
//1 1
let userYearInput = prompt("Please enter year");
const isItLeap =
  userYearInput % 100 == 0 ? userYearInput % 400 == 0 : userYearInput % 4 == 0;
console.log(isItLeap);

if (userMonth) {
  if (userMonth == "february" && isItLeap) {
    console.log(29);
  } else {
    console.log(months.find((month) => month.month == userMonth).days);
  }
}
