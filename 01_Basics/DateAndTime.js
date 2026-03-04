// Dates
let mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

// Timestamp

let myTimestamp=Date.now()
console.log(myTimestamp);

console.log(Math.floor(Date.now()/1000));
let newDate= new Date()
console.log(newDate);

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
