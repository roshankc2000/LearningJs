// some more practise in strings...

//concat();

var a = [1, 2, 3];
var b = [3, 4, 5];
var c = [6, 7, 8, 9, 0];
console.log(a);
console.log(b);
console.log(c);
var combined = a.concat(b, c);
console.log("after concat a,b,c: " + combined);

//sort();
console.log("Sorted:" + combined.sort());

//reverse();
console.log("Reversed:" + combined.reverse());

//splice(); just opposite of slice i.e. splice is used to replace old items or add new items to array
// arrayName.splice(indexWhereToStart , no of item to replace , N,N,N); N = 1,2,3, etc jati ota add garna xa teti ota N ;
var a = [1, 2, 3, 4, 5, 6];
console.log("before splice:" + a);
var replaced = a.splice(3, 1, 0, 0, 0);
console.log("removed: " + replaced + " after replacement: " + a);

//slice(); to slice out a piece from an array and  RETURNS new created array;
//arrayName.slice(2)=> slice after 2nd item to alllll remaining;
var temp = [1, 2, 3, 4, 5, 6];
var sliced = temp.slice(2);
console.log("Slice after 2nd: " + sliced);
//arrayName.slice(1,4)=> yesle 1 lai gardai 1paxiko bata 4samma garxa i.e 2,3,4 mabhako element splie garera new array return garxa
var sliced = temp.slice(1, 4);
console.log("Slice after 2nd: " + sliced);