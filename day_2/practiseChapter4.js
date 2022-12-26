//ch4 qn1
console.log("her\"".length);//slah is ignored so 4

//ch4 qn2

let string = "Welcome to GeeksforGeeks.";
check = string.includes('Geeks');
console.log(check)
check = string.startsWith('Welcome');
console.log(check)
check = string.endsWith('Geeks');
console.log(check)

//ch4 qn3
console.log(string.toLocaleLowerCase())

//ch4 4 //extraxt 1000
let sent = "Please give Rs1000";
console.log(sent.slice(14));

//ch4 5
let naam = 'Roshan';
naam[3] = 'z';
console.log(naam);
//this will not work string ko bich ko change hudaina , strings are """"imMutable"""""



