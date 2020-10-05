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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const arr = [];
// const arr = Array()
const fiveItems = Array(5).fill(1);
//3
console.log(fiveItems.length);
//4
console.log(fiveItems[0]);
console.log(fiveItems[2]);
console.log(fiveItems[fiveItems.length - 1]);
//5
const mixedDataTypes = ["Text", 2, "More Text", { text: "Hello" }, 2, 4];
//6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//7
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
//10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
//12
console.log(itCompanies.toString());
//13
let randomIndex = itCompanies.indexOf("Github");
if (randomIndex != -1) {
  console.log("Company exists!");
} else {
  console.log("Company does no exist");
}
//14 ❌
console.log(itCompanies.includes("Amazon")); //?????????
//15
console.log(itCompanies.sort());
//16
console.log(itCompanies.reverse());
//17
console.log(itCompanies.slice(0, 3));
//18
console.log(itCompanies.slice(-3));
//19
console.log(itCompanies.slice(3, 4));
//20
console.log(itCompanies.shift());
//21
console.log(itCompanies.splice(2, 1));
//22
console.log(itCompanies.pop());
//23
console.log(itCompanies.splice(0, 6));
