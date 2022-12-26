//ch5 qn1

// const sentence = [1, 2, 3, 4, 5];
// toAdd = parseInt(prompt("Enter a no"));
// sentence.unshift(toAdd);
// console.log(sentence);
// console.log(sentence.sort())//

//ch5 qn2
// const senten = [1, 2, 3, 4, 5];
// do {
//     toAdd = parseInt(prompt("Enter a no"));
//     senten.unshift(toAdd);
//     console.log(senten);
// } while (toAdd != 0);

//ch5 qn3

const arr = [10, 11, 15, 14, 19, 20];
console.log(arr);
var result = arr.filter((x) => {
    return x % 10;//here we give what to filter
    //exactly divisible by 10 is removed i.e filtered
}
)
console.log(result);

//ch5 qn4
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2);
var result = arr2.map(
    (value) => {
        return value ** 2;
    }
)
console.log(result);

//ch5 qn5 :find factorial using reduce
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3);
var result = arr3.reduce(
    (value1,value2) => {
        return value1 * value2;
    }
)
console.log(result);


