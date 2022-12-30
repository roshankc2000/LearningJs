//ch7 qn1

//nav bar's 1st element to red

var selected = document.getElementsByClassName('n')[0];
selected.style.color = 'red';


//ch7 qn4
Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.background = 'cyan';
}
);
