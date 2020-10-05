// Level 2

//2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(/\. |\, | /);
console.log(words);
console.log(words.length);

//3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

const allergic = true;
if (shoppingCart[0] != "Meat") {
  shoppingCart.unshift("Meat");
}
if (shoppingCart[shoppingCart.length - 1] != "Sugar") {
  shoppingCart.push("Sugar");
}
if (allergic) {
  let honeyIndex = shoppingCart.indexOf("Honey");
  shoppingCart.splice(honeyIndex, 1);
  // console.log(shoppingCart.filter((value) => value != "Honey"));
}

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

//4
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
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
console.log(countries);

//5
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
