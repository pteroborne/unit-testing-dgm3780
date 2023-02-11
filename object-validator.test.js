// Write a function that accepts 2 parameters.
// One is an object, the second is a string.
// The function should validate that the string is a key of the object.

import {describe, expect, it, test} from "vitest";
import {validateKey} from "./object-validator";

describe("#validateKey", () => {
    it("should return true if the key is present in the object", () => {
        const obj = { name: "John Doe", age: 30 };
        const key = "name";
        expect(validateKey(obj, key)).toEqual(true);
    });

    it("should return false if the key is not present in the object", () => {
        const obj = { name: "John Doe", age: 30 };
        const key = "address";
        expect(validateKey(obj, key)).toEqual(false);
    });

    it("should return true if the key is present in the object with a different case", () => {
        const obj = { name: "John Doe", age: 30 };
        const key = "NAME";
        expect(validateKey(obj, key)).toEqual(true);
    });

    it("should return false if the key is a number", () => {
        const obj = { name: "John Doe", age: 30 };
        const key = 123;
        expect(validateKey(obj, key)).toEqual(false);
    });
});
