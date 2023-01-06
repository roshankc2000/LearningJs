//Browser Events

//part1
// const kaamGarBhai = () => {
//     ondblclick(console.log(box.innerHTML = "clicked"))
// }

//part2
// let changes = document.getElementsByClassName('btn')[0];
// changes.onclick = () => {
//     // let b = document.getElementsByClassName('btn')[0];
//     let b = document.body;
//     b.innerHTML = "Hello World"+b.innerHTML;
// }


//Event listners

// id1.addEventListener('click', (() => {
//     console.log('hello World');
// }));

//another example hai

// let event1 = () => {
//     console.log('hello World');
// }
// let event2 = () => {
//     alert('hello World');
// }

// id1.addEventListener('click', event1);

// id1.addEventListener('click', event2);

// let a = prompt('Enter 1 for console and 2 for alert');
// if (a == "1") {
//     id1.removeEventListener('click', event2);
// } else {
//     id1.removeEventListener('click', event1);

// }
//yo  mathi ko ma 1 garepar 2nd event remove hunxa and aru no gare 1st event gayab hunxa

//event object

// let eobj = (event) => {
//     // console.log(event);
//     console.log(event.type, event.clientX, event.clientY);
//     //shows exact point were courser clicked
// }
// id2.addEventListener('click', eobj);

