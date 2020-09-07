function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2)
}

function plus(num1, num2) {
    return num1 + num2
}

function gange(num1, num2) {
    return num1 * num2
}

function kompliceret(a, b, c) {
    return a + b
}

console.log(calculate(2, 3, plus))
console.log(calculate(2, 3, gange))
console.log(calculate(2, 3, kompliceret))

