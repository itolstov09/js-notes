let myArray = [1, 2, 3, 4, 5]

let [first, second] = myArray

let [firstNumber, ...restArray] = myArray


console.log("first and second")
console.log(first, second)

console.log("firstNumber and restArray")
console.log(firstNumber, restArray)


let myObject = {
    "foo": "one",
    "bar": "two"
}

let { foo } = myObject

let { bar: myBar } = myObject

console.log("foo")
console.log(foo)

console.log("myBar")
console.log(myBar)
