// Calculator
// Write 4 functions for the basic calculator operations. (+. -, *, /)
// Write 2 more functions for 2 other calculator operations. (X!, X2, ex, ect.)

import {describe, expect, it, test} from "vitest";
import {add, subtract, multiply, divide} from "./calculator";

describe("#add", () => {
    it("should return the sum of two numbers", () => {
        const num1 = Math.random()
        const num2 = Math.random()
        expect(add(num1, num2)).toEqual(num1 + num2)
    })
})

describe("#subtract", () => {
    it("should return the difference of two numbers", () => {
        const num1 = Math.random()
        const num2 = Math.random()
        expect(subtract(num1, num2)).toEqual(num1 - num2)
    })
})

describe("#multiply", () => {
    it("should return the product of two numbers", () => {
        const num1 = Math.random()
        const num2 = Math.random()
        expect(multiply(num1, num2)).toEqual(num1 * num2)
    })
})

describe("#divide", () => {
    it("should return the quotient of two numbers", () => {
        const num1 = Math.random()
        const num2 = Math.random()
        expect(divide(num1, num2)).toEqual(num1 / num2)
    })
})

describe("#square", () => {
    it("should return the square of a given number", () => {
        const num = Math.random()
        expect(square(num)).toEqual(num * num)
    })
})

describe("#factorial", () => {
    it("should return the factorial of a given number", () => {
        const num = Math.floor(Math.abs(Math.random()))
        let factorialResult = 1;
        for (let i = 1; i <= num; i++) {
            factorialResult *= i;
        }
        expect(factorial(num)).toEqual(factorialResult)
    })
})