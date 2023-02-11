function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function square(a) {
    return a * a;
}

function factorial(a) {
    if (a < 0 || a !== Math.floor(a)) {
        return NaN;
    }
    let result = 1
    for (let i = 1; i <= a; i++) {
        result *= i;
    }
    return result
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    factorial
};
