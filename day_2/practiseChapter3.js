//ch3 qn1
const obj = {
    harry: 98,
    rohan: 70,
    aakash: 7,
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(Object.keys(obj)[i]);
}
//Object.keys(object_name) = selects objest

//ch3 qn2
for (i in obj) {
    console.log('Marks of ' + i + ' is ' + obj[i]);
}

//ch3 qn3
// do {
//     number = parseInt(prompt('Enter a random no to check your luck.'));
// } while (number != 69);


//ch3 qn4
const meanOf = (m,n,o,p,q) => {
    return (m + n + o + p + q) / 5;
}
console.log('Mean of 1 2 3 4 5 : '+meanOf(1, 2, 3, 4, 5));



