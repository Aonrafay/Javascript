let myarray = ["apple", "banana", "cherry",34, true, null];
//array methods
console.log(myarray.length); //length of array
myarray.pop(); //removes last element
console.log(myarray);
myarray.push("orange"); //adds element at the end
console.log(myarray);
myarray.shift(); //removes first element
 myarray.unshift();
console.log(myarray.unshift("kiwi")); //adds element at the beginning
let newlength = myarray.unshift("kiwi");
console.log(newlength); //length of array after unshift
myarray.toString(); //converts array to string
console.log(myarray.toString()); //prints array as string
myarray.sort(); //sorts array
console.log(myarray); //prints sorted array
// myarray.reverse(); //reverses array
