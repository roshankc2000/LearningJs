//practise of chapter 5

const myArray = [90, 20, 70, 40, 50, 60, 70, 98, 55];
//accessing array data
console.log(myArray[0]);
// finding array length
console.log(myArray.length);

//as arrays are mutable we can change values of arrays....
myArray[3] = 8;
console.log(myArray);


//Array Methods
let x = myArray;
//toString();
console.log(x.toString());
//join(); joins all array elements with desgired symnols
console.log(x.join("*"));
//pop(); it removes last value from array , updates original array and returns poped
var poped = x.pop();
console.log("Popped value is : " + poped);
//push(); pushesh to last in array & it returns length of updated array
var pushedLength = x.push(poped);
console.log('Length of array after pushing is : ' + pushedLength);
//shift(); exactly like pop but from front
var shifted = x.shift();
console.log("Shifted value is : " + shifted);
//unshift(); same like push but from front
var unshiftLength = x.unshift(shifted);
console.log("Length after Unshift is : " + unshiftLength);
//delete(); as simple as it sounds
delete x[0];
console.log("after deletetion:" + x);







