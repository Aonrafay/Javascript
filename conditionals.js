// conditional statements

var age = prompt("Enter your age: ");
if (age < 0) {
    console.log("Age cannot be negative.");
}
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 60) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}