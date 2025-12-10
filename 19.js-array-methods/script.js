//1
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

let indexHoney = shoppingCart.indexOf('Honey');
if (indexHoney !== -1) {
  shoppingCart.splice(indexHoney, 1);
}

let teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);






//2
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

countries.reverse();
console.log(countries);

let indexCanada = countries.indexOf('Canada');
let indexDenmark = countries.indexOf('Denmark');

if (indexCanada !== -1 && indexDenmark !== -1) {
  countries.splice(indexCanada, 2, 'Azerbaijan'); 
}

console.log(countries);









//3
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
















//4
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

let middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]);

console.log(itCompanies.sort());

itCompanies.forEach(company => console.log(company.toUpperCase()));

if (itCompanies.includes('Google')) {
  console.log('Google');
} else {
  console.log('Company is not found');
}

let result = [];
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count <= 1) {
    result.push(company);
  }
}
console.log(result);








function mergeArrays(arr1, arr2, char) {
  let merged = [...arr1, ...arr2]; 
  return merged.join(char);
}

console.log( mergeArrays([1, 2], [3, 4], '*') );



//1
let arr = [
  { key: 5, name: "test" },
  { key: 12, name: "table" },
  { key: 7, name: "tort" },
  { key: 20, name: "bell" },
  { key: 3, name: "tele" },
  { key: 15, name: "t" },
  { key: 8, name: "tell" }
];

let result1 = arr.filter(obj => obj.name.startsWith("t"));



//2
let count2 = 0;
arr.forEach(obj => {
  if (obj.name.startsWith("t") && obj.name.endsWith("t")) {
    count2++;
  }
});





//3
let sum3 = 0;
arr.forEach(obj => {
  if (obj.name.startsWith("t") && obj.name.endsWith("t")) {
    sum3 += obj.key;
  }
});






//4
arr.forEach(obj => {
  if (obj.name.endsWith("e")) {
    obj.name = "SuperDev";
  }
});




//5
let longest5 = arr.reduce((max, obj) =>
  obj.name.length > max.name.length ? obj : max
);






//7
let index7 = arr.indexOf(longest5);
let square7 = index7 * index7;



//8
let result8 = arr.filter(obj => obj.name.length === 4);


//9
let result9 = arr.reduce((max, obj) =>
  obj.key > max.key ? obj : max
).name;






//10
let result10 = [];

arr.forEach((obj, index) => {
  let countL = obj.name.split("").filter(ch => ch === "l").length;
  if (countL === 2) {
    result10.push(index);
  }
});




//11
let result11 = arr.filter(obj => {
  let countT = [...obj.name].filter(ch => ch === "t").length;
  return countT >= 2;
});
