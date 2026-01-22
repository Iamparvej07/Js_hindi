// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getFullYear());
// console.log(myDate.toJSON());
// console.log(myDate.getSeconds());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getHours());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);


// let myCreatedate = new Date(2026, 0,24)
let myCreatedate = new Date("01-22-2026")
// console.log(myCreatedate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedate.getTime());
// console.log(myCreatedate.getTime());

let newDate = new Date ()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());

console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})



