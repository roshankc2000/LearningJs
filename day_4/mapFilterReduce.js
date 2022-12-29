//Practise for Map filter reudce

//MAP.................
const myArray = [1, 2, 3, 4, 5, 6, 7];
console.log("The array is : " + myArray);
//only value used :
let mapped = myArray.map(
    (value, index, array) => {
        return value ** 2;
    }
)
console.log("Square of each elements: " + mapped);

//only index used
let mappedAddress = myArray.map(
    (value, index, array) => {
        return index;
    }
)
console.log("Index of each elements: " + mappedAddress);

//only array used
let mappedArray = myArray.map(
    (value, index, array) => {
        return array;
    }
)
console.log("Returning array: " + mappedArray);


//Filter

//using values
var copy = myArray;
console.log("Array before filter: " + copy);
var filtered = copy.filter(
    (value) => {
        return value <= 2;
    }
)
console.log("Filtered to display values less than '2' : " + filtered);

//using index
var filtered = copy.filter(
    (value, index) => {
        return index <= 2;
    }
)
console.log("Filtered to display values of index less than 2 : " + filtered);

console.log("Till this moment im unknown of how to return 'array' using filter");

//use of reduce
var copy = myArray;
console.log("Before reducing :" + copy);
var reduced = copy.reduce(
    (val1, val2) => {
        return val1 * val2;
    }
)
console.log("Reduced to 'value1 * value2 * ... * valueN' :  " + reduced);






