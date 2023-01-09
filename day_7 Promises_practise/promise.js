//ch9 qn1&2 solution : took 50mins to solve
// const loadScript = async (linkHere) => {
//     return new Promise(
//         (resolve, reject) => {
//             let script = document.createElement('script');
//             script.src = linkHere;
//             script.onload = () => {
//                 resolve('Script Loaded');
//             }
//             document.body.append(script);
//         }
//     )
// }
// const main1 = async () => {
//     let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
//     console.log(a);

// }
// main1();

//ch9 qn3 with try catch in promises solution :

// const loadScript = async (linkHere) => {
//     return new Promise(
//         (resolve, reject) => {
//             let script = document.createElement('script');
//             script.src = linkHere;
//             script.onload = () => {
//                 resolve('Script Loaded');
//             }
//             if (!notCheck(linkHere))
//                 reject(new Error("wrong url"));
//             document.body.append(script);
//         }
//     )
// }

// const notCheck = (linkHere) => {
//     if (linkHere == "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//         return true;
//     else
//         return false;
// }

// const main2 = async () => {
//     try {
//         let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.js');
//         console.log(a);
//     } catch (err) {
//         console.log("error 404 handeled")
//     }

// }
// main2();

