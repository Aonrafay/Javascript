//loops in javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//forEach method
arr.forEach(function(element) {
    console.log(element);
});

let j=0;
while(j<arr.length) {
    console.log(arr[j]);
    j++;
}

do {
    console.log(arr[j]);
    j++;
}
while(j < arr.length);