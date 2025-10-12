/*
1. Write a function `makeTea` that takes one parameter, `typeOfTea`, and return a string like `"Making green tea"` when called with `"grren tea"`.
   Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}
let teastatus = makeTea("green tea")
//console.log(teastatus);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`.
   Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
   Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `order confirmed for chai`
    }
    return confirmOrder()
}
let confiramtion = orderTea("green tea")
//console.log(confiramtion);

/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity.` The function should return the total cost by multiplying the `price` nad `quantity`.
   Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price,quantity) => price*quantity
let totalCost = calculateTotal(89,2)
//console.log(totalCost);

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
   Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {}
function processTeaOrder(teaFunction) {
    return teaFunction('earl grey')
}

processTeaOrder(makeTea)

/*
5. Write a function named `createTeaMaker` that returns another function.
   The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
   Store the returned function in variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`
    }
}
let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result);
