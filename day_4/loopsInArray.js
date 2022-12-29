//using loops with Array:

let numArray = [4, 5, 8, 2, 9, 3, 0, 1, 7, 8];
console.log("Array is: " + numArray);

//For Each Loop :
numArray.forEach(
    (element) => {
        console.log(element * element);
    }
)
console.log("Here we used forEach loop to access individual elements of array and easily manipulate them.");


//Array from :
//we use "Array.from" in html collections paxi sikinxa level advance bhayepaxi
let naam = "Roshan KC";
var temp = Array.from(naam);
console.log(naam);
console.log("Using Array.from(); : " + temp);

//For ... of :
console.log("'for..of' prints all elements of array.");
for (let i of numArray) {
    console.log(i);
}

//For ... in :
console.log("'for...in' prints index of all total elements present in array");
for (i in numArray) {
    console.log(i);
}
// for..in le objets ma keys dinthyo bhane array ma index are like keys only they are hidden so for..in le array ko elements ko index dinxa



