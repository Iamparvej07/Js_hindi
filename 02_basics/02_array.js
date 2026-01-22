const marvel_heros = ["spiderman","thor","ironman"]
const dc_heros = ["superman","falsh","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros [3][4]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);


const all_new_hero =[...marvel_heros,...dc_heros]
//console.log(all_new_hero);


const another_array = [1,2,3,[4,5,6],7 [6,7,[8,4]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Parvej"));
console.log(Array.from("Parvej"));
console.log(Array.from({name: "Parvej"}));




