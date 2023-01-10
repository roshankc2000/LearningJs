//ch 10 qn 1 API futur ma garinxa aaile lai API le pelyo

//Single data at a time
// //ch 10 qn2 3 4
// let key = prompt("Enter your Email");
// let value = prompt("Enter your Password");

// //qn2 ans add item in local storage
// localStorage.getItem(key, value);

// console.log("all data here :");
// //qn3 ans fetxh item from local, storage
// console.log(`Value of ${key} is ${value}`);
// //qn4 and delete item form local storage
// console.log(`Item ${key} is deleted`);
// localStorage.removeItem(key);

// multi data at a time
//to save
// do {
//     let key = prompt("Enter your Email");
//     let value = prompt("Enter your Password");
//     localStorage.setItem(key, value);
// } while (confirm("Do you want to add more data?"));
//to fetch
// let length = localStorage.length;
// for (i = 0; i < length;i++){
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     document.write(`${key} ${value}<br>`);
// }
// // to delete 
// localStorage.removeItem(key);