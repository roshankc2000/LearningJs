//ch2 qn1
let age = 10
if (age <= 10 || age >= 20) {
    console.log('Age is betn 10 to 20')
} else {
    console.log('Age isnt betn 10 to 20')
}
//ch2 qn2
let ch = 'm'
switch (ch) {
    case 'm':
        console.log('Male')
        break;

    default:
        console.log('Female')
        break;
}

//ch2 qn3
let number = 6
if (number % 2 == 0 && number % 3 == 0) {
    console.log('Exactly divisible by 2 & 3.')
} else {
    console.log('Not divisible by 2 & 3.')
}

//ch2 qn4
if (number % 2 == 0 || number % 3 == 0) {
    console.log('Divisible by 2 or 3.')
} else {
    console.log('Not divisible by 2 or 3.')
}

//ch2 qn5
if (age >= 18) {
    console.log('You can drive.')
} else {
    console.log('You cannot drive.')
}