// Numbers
// A function that takes an array of numbers, and adds up all the numbers in the array and outputs the total. ( [1,2,3] would output: 6)

import {describe, expect, it, test} from "vitest";
import {sumArray} from "./numbers";

describe("#sumArray", () => {
    it("should return the sum of all numbers in the array", () => {
        const numbers = [1, 2, 3];
        const result = sumArray(numbers);
        expect(result).toBeOfType("number");
        expect(result).toEqual(6);
    });

    it("should return 0 if the array is empty", () => {
        const numbers = [];
        const result = sumArray(numbers);
        expect(result).toBeOfType("number");
        expect(result).toEqual(0);
    });

    it("should return the sum of all positive and negative numbers in the array", () => {
        const numbers = [-1, 2, 3, -4];
        const result = sumArray(numbers);
        expect(result).toBeOfType("number");
        expect(result).toEqual(0);
    });

    it("should return the sum of all decimal numbers in the array", () => {
        const numbers = [0.1, 0.2, 0.3];
        const expected = 0.6;
        const tolerance = 0.0000001;
        const result = sumArray(numbers);
        expect(result).toBeOfType("number");
        expect(Math.abs(result - expected)).toBeLessThan(tolerance);
    });

    it("should return NaN if the input is not an array", () => {
        const numbers = "not an array";
        const result = sumArray(numbers);
        expect(result).toBeNaN();
    });

    it("should return NaN if the array contains non-numeric values", () => {
        const numbers = [1, 2, "not a number"];
        const result = sumArray(numbers);
        expect(result).toBeNaN();
    });
});
