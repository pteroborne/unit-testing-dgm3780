// Numbers
// A function that takes an array of numbers, and adds up all the numbers in the array and outputs the total. ( [1,2,3] would output: 6)

import {describe, expect, it, test} from "vitest";
import {sumArray} from "./numbers";

describe("#sumArray", () => {
    it("should return the sum of all numbers in the array", () => {
        const numbers = [1, 2, 3];
        expect(sumArray(numbers)).toEqual(6);
    });

    it("should return 0 if the array is empty", () => {
        const numbers = [];
        expect(sumArray(numbers)).toEqual(0);
    });

    it("should return the sum of all positive and negative numbers in the array", () => {
        const numbers = [-1, 2, 3, -4];
        expect(sumArray(numbers)).toEqual(0);
    });

    // RIP floating points. Added in tolerances
    it("should return the sum of all decimal numbers in the array", () => {
        const numbers = [0.1, 0.2, 0.3];
        const expected = 0.6;
        const tolerance = 0.0000001;
        const result = sumArray(numbers);
        expect(Math.abs(result - expected)).toBeLessThan(tolerance);
    });

});
