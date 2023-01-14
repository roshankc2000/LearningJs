// let message = "hearing";
// console.log(message);
// (() => {
//     let message = "Good morning";
//     console.log(message);
//     {
//         let message = "bad boy";
//         console.log(message);
//     }
//     console.log(message);
// })();
// console.log(message);

////lexical environment
// let message = "hearing";
// console.log(message);
// function hello0(){
//     let message = "Good morning";
//     console.log(message);
//     {
//         let message = "bad boy";
//         console.log(message);
//     }
//     let x = function helllo1() {
//         console.log("I am C, " + message);
//     }
//     return x;
// };
// x = hello0();
// x();

// //lexical environment
// function hello0(){
//     let message = "Good morning";
//     console.log(message);

//     let x = function helllo1() {
//         console.log("I am C, " + message);
//     }
//     message="i'm changed due to lexical effect."
//     return x;
// };
// x = hello0();
// x();
// console.log(x);

//lexical environment
// function returnFunc() {
//     const first = () => {
//         let a = 1;
//         console.log(a);
//         const second = () => {
//             let a = 2;
//             console.log(a);
//             const third = () => {
//                 let a = 3;
//                 console.log(a);
//             }
//             third();
//         }
//         second();
//     }
//     return first;
// }
// let a = returnFunc();
// a();
// // console.log(a);

////updating values
// function returnFunc() {
//     const first = () => {
//         let a = 1;
//         console.log(a);
//         const second = () => {
//             // let a = 2;
//             console.log(a);
//             const third = () => {
//                 // let a = 3;
//                 console.log(a);
//             }
//             third();
//         }
//         a = 999;
//         second();
//     }
//     return first;
// }
// let a = returnFunc();
// a();
// // console.log(a);

// //yo sasta ganja fukeko code ho
// const fn = () => console.log('a'); console.log('b'); console.log('c'); console.log('d'); console.log('e');//suru ma 1st ko skip and 2nd bata print hunxa then a last ma hunxa
// fn();

//yo sasta nasa ko fix
// const fn = () => {
//     console.log('a');
//     console.log('b');
//     console.log('c');
// }
// fn();
