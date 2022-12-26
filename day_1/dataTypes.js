// Primitives : nn bb ss u
let data1 = null
let data2 = 69
let data3 = true
let data4 = BigInt("999")
let data5 = "Hello World"
let data6 = Symbol("This is Symbol")
let data7 = undefined

console.log(data1, data2, data3, data4, data5, data6, data7)

console.log(typeof data6)

//non-Primitivies : object
const bookAuthor = {
    name: "Roshan",
    age: "22",
}
bookAuthor.gender = "Male"
console.log(bookAuthor)
console.log(bookAuthor.name)
