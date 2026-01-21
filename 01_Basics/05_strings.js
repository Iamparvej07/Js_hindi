const name ="parvej"
const repoCount = 50

// console.log(name + repoCount + " value");
// console.log('Hello mu name is ${name} and my repo count is ${repoCount}');


const gameName = new String('doctor-strange')

console.log(gameName[12]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(13));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,10)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne= "     parvej    "
console.log(newStringOne);
console.log(newStringOne.trim());  //remove the spaces

const url = "https://parvej.com/parvej%07ansari"
console.log(url.replace('%07','-'));

console.log(url.includes('parvej'));
console.log(gameName.split('-'));


